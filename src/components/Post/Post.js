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
        // let id = this.props.match.params.postid
        // let newId = parseInt(id)
        axios.get(`/api/post/${this.props.match.params.postid}`).then(res => {
            console.log('i am the data',res.data)
            console.log('i am the props', typeof this.props.match.params.postid)
            this.setState({
                post: res.data
            })
        })   
    }
    render() {
        console.log('state:' , this.state.post)
        return (
            <div>
              When a post is clicked on this will display the post 
        <h1>{this.state.post.title}</h1>
            </div>
        )
    }
}

export default Post
