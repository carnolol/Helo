import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {loginUser} from '../ducks/reducer'
import {connect} from 'react-redux'


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
            username: this.state.username,
            password: this.state.password
        }
        axios.post('/api/auth/register', body).then(res => {
            this.props.loginUser(res.data)
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
                this.props.loginUser(res.data)
                // need to do props histy push stufF?
            }).catch(err => alert(`Unable to login because of ${err}`))
    }
    refresh
    render() {
        // console.log(this.props.history)
        return (
            <div>
                <h1>HELO</h1>
                <p>Username:</p>
                <input name='username' 
                    onChange={e => this.handleInput(e)} />
                <p>Password: </p>
                <input name='password' 
                    onChange={e => this.handleInput(e)} />
                    <br/>
                <Link to='/dashboard'>
                    <button onClick={() => this.handleLogin()} >Login</button>
                </Link>
                <Link to='/dashboard'>
                    <button onClick={() => this.handleRegister()}>Register</button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, {loginUser})(Auth)
