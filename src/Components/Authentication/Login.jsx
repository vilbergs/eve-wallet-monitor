import React, { Component } from 'react'
import LoginDialog from './LoginDialog'

class Login extends Component {
    render() {
        return (
            <LoginDialog
                open={true}
                static={true}
            />
        )
    }
}

export default Login
