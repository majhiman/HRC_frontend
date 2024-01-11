import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  appbar:{
      backgroundImage:"radial-gradient(#2d4251 ,#2d4251)",
      boxShadow:"none",
  },
  toolbar:{
    justifyContent: "center"
  },
  privacyPolicy:{
    color: "#0000EE",
    paddingRight: "4px",
    textDecoration: "underline"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
        <footer>
        <AppBar position="static" elevation={0} component="footer" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="caption" className={classes.privacyPolicy}>Privacy Policy</Typography>
                <Typography variant="caption">| ©2022 Highradius Corporation. All Rights Reserved.</Typography>
                
            </Toolbar>
        </AppBar>
        </footer>
    </div>
  )
}

export default Footer