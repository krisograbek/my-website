import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./Content";
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
  const list = [
    "blog",
    "journal",
    "smallwins",
    "favbooks",
    "models",
    "about"
  ]
  return (
    <Router>
      <Grid container spacing={4} className={classes.grid}>
        <Logo />
        <Navbar navList={list} />
        <Content />
      </Grid>
    </Router>
  );
}

export default PageLayout;
