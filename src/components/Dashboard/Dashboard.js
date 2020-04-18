import React, { Component } from 'react'
import axios from 'axios'

export class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
    }
    getAllPosts = () => {

    }
    resetSearch = () => {
        
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input placeholder='Search by Title'
                    onChange={e => this.handleInput(e)}
                    name='search'
                />
                <p>{this.state.search}</p>
                dashboard
            </div>
        )
    }
}

export default Dashboard
