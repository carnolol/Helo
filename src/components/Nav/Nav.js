import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import './Nav.css'

// need to change buttons into images provided.
export class Nav extends Component {
    render() {
        // console.log('redux props??', this.props)
        return (
            <div className='nav-bar'>
                    <img placeholder="profile pic"
                        alt='profile_pic'
                        className="profile-pic-nav
                        "
                        src={this.props.profile}/>
                        <p>{this.props.username}</p>
                <Link to='/dashboard'>
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
