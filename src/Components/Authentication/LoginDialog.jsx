import React, { Component } from 'react'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide'
import Button from '@material-ui/core/Button'
import Auth from '../../react-eve-sso-auth/Auth'

const auth = new Auth

class LoginDialog extends Component { 
    render() {      
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.close}
                TransitionComponent={Transition}
                maxWidth="md"
                fullWidth={true}
                disableBackdropClick={this.props.static}
                disableEscapeKeyDown={this.props.static}>
                <DialogTitle>{'Login'}</DialogTitle>
                <DialogContent>
                    <Button
                        variant="raised"
                        color="primary"
                        href={auth.getSSOUrl()}>
                            
                        Login with EVE Online Account
                    </Button>
                </DialogContent>
            </Dialog>
        )
    }
}

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

export default LoginDialog