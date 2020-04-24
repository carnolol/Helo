import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {logoutUser, updateUser, makeUser} from '../../ducks/reducer'
import axios from 'axios'
import home from '../../pictures/home_logo.png'
import newPostLogo from '../../pictures/new_logo.png'
import cancel from '../../pictures/shut_down.png'
import './Nav.css'

// need to change buttons into images provided.
export class Nav extends Component {

    componentDidMount = () => {
        // hit endpoint GetUser from backend here & put on redux
        axios.get('/api/auth/user').then(res => {
            this.props.makeUser(res.data)
        })
    }
    handleLogout = () => {
        axios.delete('/api/auth/logout').then(() => {
            this.props.logoutUser()
        }) 
    }
    render() {
        return (
            <div className='nav-bar'>
                <div className='top-nav'>
                    <img placeholder="profile pic"
                        alt='profile_pic'
                        className="profile-pic-nav
                    "
                        src={this.props.profile} />
                    <p className='username'>{this.props.username}</p>
                    <Link to='/dashboard'>
                        <img className='home-logo'
                            alt='home'
                            src={home} />
                    </Link>
                    <Link to='/new'>
                        <img alt='new post'
                            className="new-post"
                            src={newPostLogo} />
                    </Link>
                </div>
                <Link to='/'>
                    <img className='power'
                        onClick={()=> this.handleLogout()}
                        alt='power'
                        src={cancel} />
                </Link>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, {logoutUser, updateUser, makeUser})(Nav)

