import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";


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
      <Grid container xs={3} spacing={4} className={classes.grid}>
        <Paper className={classes.paper}>Logo</Paper>
      </Grid>
  );
}

export default Logo;
