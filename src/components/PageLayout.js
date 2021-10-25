import { AppBar, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Logo from "./Logo";
import Navbar from "./Navbar";


const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%',
    margin: '0px',
    padding: '20px'
  }
}));

function PageLayout() {
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
    <Router>
      <Grid
        container
        direction="column"
        alignItems="stretch"
        alignContent="stretch"
        spacing={4}
        className={classes.grid}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Content />
        </Grid>
      </Grid>
    </Router>
  );
}

export default PageLayout;
