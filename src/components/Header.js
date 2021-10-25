import { AppBar, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Contacts from './Contacts';
import Logo from './Logo';
import Navbar from './Navbar';


const useStyles = makeStyles((theme) => ({
  header: {
    padding: '8px',
    backgroundColor: '#33373f'
  }
}));


function Header() {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={classes.header}
    >
      <Contacts />
      <Grid
        container
      >
        <Grid item xs={3}>
          <Logo />
        </Grid>
        <Grid item xs={9}>
          <Navbar />
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default Header
