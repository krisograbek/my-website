import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import MyLink from "./MyLink";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%',
    margin: '0px',
    //   background: theme.palette.warning.dark,
    justifyContent: 'flex-end'
  },
  item: {
    alignSelf: 'end'
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: 'center',
  }
}));

function Navbar() {
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
    <Grid container className={classes.grid}>
      {navElements.map((listItem, key) =>
        <Grid item className={classes.item} key={key}>
          <Typography className={classes.paper} >
            <MyLink text={listItem} />
          </Typography>
        </Grid>
      )}
    </Grid>
  );
}

export default Navbar;
