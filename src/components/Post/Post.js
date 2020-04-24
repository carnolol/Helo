import React, { Component } from 'react'
import axios from 'axios'
import './Post.css'
import noPhoto from '../../pictures/no_image.jpg'

export class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {}
        }
    }
    componentDidMount = () => {
        axios.get(`/api/post/${this.props.match.params.postid}`).then(res => {
            this.setState({
                post: res.data
            })
        })
    }
    render() {
        return (
            <div className='post-display-container'>
                <div className="title-and-img">
                    <h1 className='postz-title' >{this.state.post.title}</h1>
                    <img className='post-img'
                        alt={this.state.post.img}
                        src={this.state.post.img ? this.state.post.img : noPhoto} />
                </div>
                <div className='content-and-profile'>
                    <p className='post-content'>{this.state.post.content}</p>
                    <p>by: {this.state.post.username}</p>
                    <img className='robot-profile-pic'
                        alt='nothing found'
                        src={this.state.post.profile_pic} />
                </div>
            </div>
        )
    }
}

export default Post
