import React, { Component } from 'react'

export class Auth extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    handleChange = (e) =>{

    }
    handleLogin = () => {

    }
    handleRegister = () => {
        
    }
    refresh
    render() {
        return (
            <div>
                <h1>HELO</h1>
                <p>Username:</p><input/>
                <p>Password: </p><input/>
                <button>Login</button>
                <button>Register</button>
            </div>
        )
    }
}

export default Auth

