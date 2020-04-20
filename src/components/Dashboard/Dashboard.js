import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Dashboard.css'
import axios from 'axios'

export class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            search: '',
            checked: true
        }
    }
    componentDidMount = () => {
        axios.get('/api/posts').then(res => this.setState({ posts: res.data }))
    }
    getFilteredPosts = () => {
        axios.get('/api/posts/:id').then()
    }
    resetSearch = () => {

    }
    handleEdit = () => {
        this.setState({
            checked: !this.state.checked
        })
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        //need to write a get method to populate this.state.posts
        console.log('props in dashboard??', this.props)
        const allPosts = this.state.posts.map(post => {
            console.log(post.profile_pic)
            return <div className='single-post'>
                    <h3 className='post-title' >{post.title}</h3>
                <div className='name'  >
                    <p className='post-username' >by: {post.username}</p>
                    <img src={post.profile_pic} alt='profile pic img' className='post-profile-pic' /></div>
            </div>
        })
        return (
            <div>
                <div className='search-bar'>
                    <input placeholder='Search by Title'
                        onChange={e => this.handleInput(e)}
                        name='search'
                    />
                    <button>Magnify glass goes here</button>
                    <button>Reset</button>

                    <p>My Posts</p>
                    <input type='checkbox' onClick={() => this.handleEdit()} />
                </div>
                <div>
                    {allPosts}
                Dashboard
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, null)(Dashboard)
