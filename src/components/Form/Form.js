import React, { Component } from 'react'
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

    }
    render() {
        return (
            <div className='test' >
                <div className='new-post-master'>
                    <h1 className='form-title' >New Post</h1>
                    <p>Title:</p>
                    <input onChange={(e) => this.handleChange(e)}
                        name='title' />
                    <img alt='new-pic'
                        className='form-pic'
                        src={this.state.img ? this.state.img : pic} />
                    <p>Image URL:</p>
                    <input onChange={(e) => this.handleChange(e)}
                        name='img' />
                    <p>Content</p>
                    <input onChange={(e) => this.handleChange(e)}
                        name='content' />
                    <Link to='/dashboard'>
                        <button onClick={() => this.addNewPost()}>post</button>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, null)(Form)
