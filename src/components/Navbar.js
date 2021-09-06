import React from "react";
import { Grid, Link, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
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
      textAlign: 'center',
      // background: theme.palette.success.light,
    }
  }));

function Navbar(){
    const classes = useStyles();
    const navList = [
        "Blog", 
        "Journal", 
        "Small wins",
        "Fav Books",
        "Models",
        "About Me",
        "Iza"
    ]

    return (
    <Grid container xs={9} className={classes.grid}>
      {navList.map((listItem) => 
        <Grid item className={classes.item}>
          <Typography className={classes.paper} >
            <MyLink text={listItem} />
          </Typography>
        </Grid>
      )}
    </Grid>
  );
}

export default Navbar;
