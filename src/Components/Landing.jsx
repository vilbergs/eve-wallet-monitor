import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer'
import { withStyles } from '@material-ui/core/styles';
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InputIcon from '@material-ui/icons/Input'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
import Divider from '@material-ui/core/Divider'
import Character from './Character'
import LoginDialog from './Authentication/LoginDialog'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = ({ palette }) => ({
    root: {
        width: 500,
        margin: 'auto',
        marginTop: 50,
        padding: 50
    },
    paper: {
        backgroundColor: palette.primary.main,
        color: palette.getContrastText(palette.primary.main)
    },
    card: {
        maxWidth: 256,
    },
    info: {
        paddingLeft: 16
    },
    menuItem: {
          '& $primary, & $icon': {
            color: palette.getContrastText(palette.primary.main),
          },
      },
      primary: {},
      icon: {},
})

class Landing extends Component {
    state = {
        dialogOpen: false
    }

    openDialog = () => {
        this.setState({ dialogOpen: true })
    }

    closeDialog = () => {
        this.setState({ dialogOpen: false })
    }

    render () {
        const { classes } = this.props
        
        return (
            <div>
            <LoginDialog 
                open={this.state.dialogOpen}  
                close={this.closeDialog}  
                static={false}/>
            <Drawer
                anchor="left"
                variant="permanent"
                elevation={24}
                classes={{
                    paper: classes.paper
                }}>
                <Character/>
                <MenuList>
                    <Divider/>
                    <MenuItem onClick={this.openDialog} className={classes.menuItem}>
                        <ListItemIcon className={ classes.icon }>
                            <InputIcon/>
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Login"/>
                    </MenuItem>
                    <Divider/>
                    <MenuItem className={classes.menuItem}>
                        <ListItemIcon className={ classes.icon }>
                            <AccountBalanceWalletIcon/>
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Wallet"/>
                    </MenuItem>
                </MenuList>
            </Drawer>
            <Paper className={classes.root} elevation={4}>
                <Typography variant="headline" component="h3">
                This is a sheet of paper.
                </Typography>
                <Typography component="p">
                Paper can be used to build surface or other elements for your application.
                </Typography>
            </Paper> 
            </div>           
        )
    }
}

export default withStyles(styles)(Landing)