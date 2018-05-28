import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './Landing'
import Login from './Authentication/Login'
import Callback from './Authentication/Callback'
import withRoot from './withRoot'
import Auth from '../react-eve-sso-auth/Auth'

const auth = new Auth

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Route exact path="/" component={Landing}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/callback" render={props => {
                        auth.setTokentoLocalStorage()
                        return <Callback />
                    }}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default withRoot(App)