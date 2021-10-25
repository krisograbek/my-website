import { AppBar, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Contacts from './Contacts';
import Logo from './Logo';
import Navbar from './Navbar';


const useStyles = makeStyles((theme) => ({
  header: {
    padding: '8px'
  }
}));


function Header() {
  const classes = useStyles();
  const navElements = [
    "blog",
    // "journal",
    // "smallwins",
    "favbooks",
    'quotes',
    "models",
    "about"
  ]

  return (
    <AppBar
      position="fixed"
    >
      <Contacts />
      <Grid
        container
        className={classes.header}
      >
        <Grid item xs={3}>
          <Logo />
        </Grid>
        <Grid item xs={9}>
          <Navbar navList={navElements} />
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default Header
