import React, { Component } from 'react'

export class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            img: '',
            content: '',
            author: '',
            authorPicture:''
        }
    }
    getPostInfo = () => {
        
    }
    render() {
        return (
            <div>
                POST
            </div>
        )
    }
}

export default Post
