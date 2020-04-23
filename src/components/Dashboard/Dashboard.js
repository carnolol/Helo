import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './Dashboard.css'
import search from '../../pictures/search_logo.png'
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
    // componentDidMount = () => {
    //     axios.get('/api/posts').then(res => this.setState({ posts: res.data }))

    // }
    componentDidMount = () => {
        axios.get(`/api/posts`).then(res => this.setState({ posts: res.data }))
        this.setState({ search: '' })
    }
    // componentDidUpdate = (prevState) => {
    //     if (prevState.posts !== this.state.posts) {
    //         this.componentDidMount()
    //     }
    // }
    getFilteredPosts = () => {
        let post = this.state.posts.map(post => post)
        console.log('POST:', post)
        axios.get(`/api/posts/${post.id}?userposts=${this.state.checked}&search=${this.state.search}`).then(res => {
            this.setState({
                posts: res.data
            })
        }).catch(err => console.log(err))
    }
    resetSearch = () => {
        this.setState({ search: '' })
    }
    handleReset = () => {
        this.resetSearch()
        this.componentDidMount()
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
        // console.log('daskboard posts', this.state.posts.id)
        const allPosts = this.state.posts.map(post => {
            return <Link to={`/post/${post.post_id}`}>
                <div className='single-post'>
                    <h3 className='post-title' >{post.title}</h3>
                    <div className='name'  >
                        <p className='post-username' >by: {post.username}</p>
                        <img src={post.profile_pic} alt='profile pic img' className='post-profile-pic' />
                    </div>
                </div>
            </Link>
        })
        return (
            <div className='dashboard-main'>
                <div className='search-bar'>
                    <input placeholder='Search by Title'
                        onChange={e => this.handleInput(e)}
                        name='search'
                    />
                    <img alt='glass' src={search} className='glass'
                        onClick={() => this.getFilteredPosts()} />
                    <button onClick={() => this.componentDidMount()}>Reset</button>
                    <p>My Posts</p>
                    <input type='checkbox' onClick={() => this.handleEdit()} />
                </div>
                <div>
                    {allPosts}
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, null)(Dashboard)
