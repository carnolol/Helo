import React, { Component } from 'react'
import axios from 'axios'

export class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
           post:{}
        }
    }
    componentDidMount = () => {
        axios.get(`/api/post/${this.props.match.params.postid}`).then(res => {
            console.log('i am the data',res.data)
            this.setState({
                post: res.data
            })
        })   
    }
    render() {
        return (
            <div>
              When a post is clicked on this will display the post 
        <h1>{this.state.title}</h1>
            </div>
        )
    }
}

export default Post
