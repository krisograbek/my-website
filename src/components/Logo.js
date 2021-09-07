import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
// import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    grid: {
      width: '100%',
    //   height: '80px',
      margin: '0px'
    },
    paper: {
      padding: theme.spacing(2),
    //   textAlign: 'center',
      background: theme.palette.secondary.light
    }
  }));

function Logo(){
    const classes = useStyles();

    return (
      <Grid item xs={3}>
        <Grid container spacing={4} className={classes.grid}>
          <Link to="/">
            <Paper className={classes.paper}>
              KRIS O.
            </Paper>
          </Link>
        </Grid>
      </Grid>
  );
}

export default Logo;
