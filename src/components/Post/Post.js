import React, { Component } from 'react'
import axios from 'axios'
import './Post.css'
import noPhoto from '../../pictures/no_image.jpg'
import power from '../../pictures/shut_down.png'

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
    deletePost = () => {
        axios.delete(`/api/post/${this.props.match.params.postid}`)
        this.props.history.push('/dashboard')

    }
    render() {
        console.log('PROPS:', this.props)
        return (
            <div className='post-display-container'>
                <div className="title-and-img">
                    <h1 className='postz-title' >{this.state.post.title}</h1>
                    <img className='post-img'
                        alt='This would be where i would but a cool picture.... IF I HAD ONE'
                        src={this.state.post.img ? this.state.post.img : noPhoto} />
                </div>
                <div className='content-and-profile'>
                    <p className='post-content'>{this.state.post.content}</p>
                    <p className='post-username'>by: {this.state.post.username}</p>
                    <img className='robot-profile-pic'
                        alt='nothing found'
                        src={this.state.post.profile_pic} />
                    <div className='text-to-display'>
                        <img alt='power'
                            src={power}
                            className='delete-post-btn' onClick={() => this.deletePost()} />
                            <p className='to-display'>Delete</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post
