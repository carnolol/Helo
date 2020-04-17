import React, { Component } from 'react'

export class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            img: '',
            content: ''
        }
    }
    render() {
        return (
            <div>
                form
            </div>
        )
    }
}

export default Form
