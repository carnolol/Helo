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
    resetSeatch = () => {
        
    }
    render() {
        return (
            <div>
                dashboard
            </div>
        )
    }
}

export default Dashboard
