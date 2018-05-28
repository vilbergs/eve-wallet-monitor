import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent';
import Spinner from 'react-spinner-material'
import Slide from '@material-ui/core/Slide'
import Auth from '../../react-eve-sso-auth/Auth'

const auth = new Auth

class Callback extends Component {
    state = {
        authenticated: false
    }
    
    componentDidMount() {
        auth.authenticateToken()
    }

    render() {
        return (
            <Dialog
                open={true}
                TransitionComponent={Transition}
                onClose={this.authenticationSuccessful}
                maxWidth="md"
                fullWidth={true}
                disableBackdropClick={true}
                disableEscapeKeyDown={true}>
                <DialogTitle>{'We are authenticating!'}</DialogTitle>
                <DialogContent>
                    <Spinner
                        size={120}
                        spinnerColor={"#333"}
                        spinnerWidth={2}
                        visible={true} 
                    />
                </DialogContent>
            </Dialog>
        )
    }
}

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

export default Callback