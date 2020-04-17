import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import './Nav.css'

// need to change buttons into images provided.
export class Nav extends Component {
    render() {
        return (
            <div className='nav-bar'>
                <Link to='/dashboard'>
                    <img placeholder="profile pic"
                        className="profile-pic-nav
                        "
                        src={this.props.profile}/>
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

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, null)(Nav)
// might need to change null
