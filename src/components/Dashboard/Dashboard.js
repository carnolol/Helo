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
    getAllPosts = () => {

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
        console.log('props in dashboard??', this.props)
        const allPosts = this.state.posts.map(post => {
            return <div className='single-post'>
                <h1>{post.title}</h1>
                <img src={this.props.profile} />
                <p>by: {this.props.username}</p>
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
                Dashboard
                <div>
                    {allPosts}
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, null)(Dashboard)
