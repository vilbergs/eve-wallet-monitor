import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { withStyles } from '@material-ui/core'

const styles = ({ palette }) => ({
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

class Character extends Component {
    render() {
        const { classes } = this.props

        return (
            <Grid 
                container 
                spacing={16}
                className={classes.card} 
            >
                <Grid item xs={12}>
                    <img alt="Character Portrait" width="256" src="/images/eve_portrait_demo.jpg"/>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.info}>
                        <Typography variant="title" color="inherit" gutterBottom>
                            Rackham Graff
                        </Typography>
                        <Typography variant="subheading" color="inherit" gutterBottom>
                            ISK 00.000.000.000.00
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Character)