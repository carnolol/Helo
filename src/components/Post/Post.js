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
                <h1 className='postz-title' >{this.state.post.title}</h1>
                <img className='post-img'
                    alt={this.state.post.img}
                    src={this.state.post.img ? this.state.post.img : noPhoto} />
                <p>{this.state.post.content}</p>
            </div>
        )
    }
}

export default Post
