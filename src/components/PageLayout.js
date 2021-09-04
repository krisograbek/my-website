import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Navbar from "./Navbar";
import Logo from "./Logo";


const useStyles = makeStyles((theme) => ({
    grid: {
      width: '100%',
      margin: '0px',
      padding: '20px'
    }
  }));

function PageLayout(){
    const classes = useStyles();

    return (
      <Grid container spacing={4} className={classes.grid}>
        <Logo />
        <Navbar />
      </Grid>
  );
}

export default PageLayout;
