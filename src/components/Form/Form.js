import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import pic from '../../pictures/no_image.jpg'
import './Form.css'

export class Form extends Component {
    constructor(props) {
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
        const body = {
            author_id: this.props.userId,
            title: this.state.title,
            img: this.state.img,
            content: this.state.content
        }
        axios.post('/api/post', body)
         }
    render() {
        return (
            <div className='test' >
                <div className='new-post-master'>
                    <h1 className='form-title' >New Post</h1>
                    <p>Title:</p>
                    <input onChange={(e) => this.handleChange(e)}
                        name='title' 
                        className="img-input"/>
                    <img alt='new-pic'
                        className='form-pic'
                        src={this.state.img ? this.state.img : pic} />
                    <p>Image URL:</p>
                    <input onChange={(e) => this.handleChange(e)}
                        name='img' 
                        className="img-input"/>
                    <p>Content</p>
                    <input onChange={(e) => this.handleChange(e)}
                        name='content' 
                        className='content-container'/>
                    <Link to='/dashboard'>
                        <button onClick={() => this.addNewPost()}>Post</button>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, null)(Form)
