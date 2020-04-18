import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import home from '../../pictures/home_logo.png'
import newPostLogo from '../../pictures/new_logo.png'
import cancel from '../../pictures/shut_down.png'
import './Nav.css'

// need to change buttons into images provided.
export class Nav extends Component {
    render() {
        // console.log('redux props??', this.props)
        return (
            <div className='nav-bar'>
                <div className='top-nav'>
                    <img placeholder="profile pic"
                        alt='profile_pic'
                        className="profile-pic-nav
                    "
                        src={this.props.profile} />
                    <p>{this.props.username}</p>
                    <Link to='/dashboard'>
                        <img className='home-logo'
                            alt='home'
                            src={home} />
                    </Link>
                    <Link to='/post/:postid'>
                        <img alt='new post'
                            className="new-post"
                            src={newPostLogo} />
                    </Link>
                </div>
                <Link to='/'>
                    <img className='power'
                        alt='power'
                        src={cancel} />
                </Link>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, null)(Nav)
// might need to change null
