import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            img: '',
            content: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addNewPost = () => {
        
    }
    render() {
        return (
            <div className='new-post-master'>
                <h1>New Post</h1>
                <p>Title:</p>
                <input/>
                <img alt='new-pic'/>
                <p>Image URL:</p>
                <input/>
                <p>Content</p>
                <input/>
                <Link to='/dashboard'>
                    <button onClick={() => this.addNewPost()}>post</button>
                </Link>
                Form to fill out a new post goes here
            </div>
        )
    }
}

export default Form
