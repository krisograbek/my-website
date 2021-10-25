import { Grid, makeStyles, Paper } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React from "react";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  grid: {
    // width: '100%',
    margin: '8px 0 0 16px'
  },
  paper: {
    padding: theme.spacing(1),
    fontSize: '24px',
    backgroundColor: grey[800],
    color: grey[300]
  },
  link: {
    textDecoration: 'none'
  }
}));

function Logo() {
  const classes = useStyles();

  return (
    <Grid container className={classes.grid}>
      <Link
        className={classes.link}
        to="/"
      >
        <Paper className={classes.paper}>
          KO
        </Paper>
      </Link>
    </Grid>
  );
}

export default Logo;
