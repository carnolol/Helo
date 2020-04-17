import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

// need to change buttons into images provided.
export class Nav extends Component {
    render() {
        return (
            <div className='nav-bar'>
                <Link to='/dashboard'>
                    <img placeholder="profile pic"
                        className="profile-pic-nav"/>
                    <button>Home</button>
                </Link>
                <Link to='/post/:postid'>
                    <button>New Post</button>
                </Link>
                <Link to='/'>
                    <button>Logout</button>
                </Link>
            </div>
        )
    }
}

export default Nav
