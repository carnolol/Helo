import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { registerUser, makeUser } from '../ducks/reducer'
import logo from '../pictures/helo_logo.png'
import { connect } from 'react-redux'
import './Auth.css'


export class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleRegister = () => {
        const body = {
            author_id: this.props.userId,
            username: this.state.username,
            password: this.state.password
        }
        axios.post('/api/auth/register', body).then(res => {
            console.log(res.data)
            this.props.makeUser(res.data)
        }).catch(err => alert(`Username is Taken ${err}`))
    }
    handleLogin = () => {
        const body = {
            username: this.state.username,
            password: this.state.password
        }
        axios
            .post('/api/auth/login', body)
            .then(res => {
                this.props.makeUser(res.data)
                // need to do props histy push stufF?
            }).catch( err => alert(`Unable to login because username does not exist ${err}`))
    }
    refresh
    render() {
        // console.log('redux state????', this.props)
        return (
            <div className='landing-page'>
                <div className='auth-form'>
                    <img className='helo-logo'
                        src={logo}
                        alt='logo' />
                    <h1 className='helo'>HELO</h1>
                    <div className="auth-container">
                        <p>Username:</p>
                        <input name='username'
                            onChange={e => this.handleInput(e)} />
                        <p>Password: </p>
                        <input name='password'
                            onChange={e => this.handleInput(e)} />
                        <br />
                        <Link to='/dashboard'>
                            <button onClick={() => this.handleLogin()} >Login</button>
                        </Link>
                        <Link to='/dashboard'>
                            <button onClick={() => this.handleRegister()}>Register</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, { registerUser, makeUser })(Auth)

