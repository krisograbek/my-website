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

function Navbar(props){
    const classes = useStyles();


    return (
    <Grid item xs={9}>
      <Grid container className={classes.grid}>
        {props.navList.map((listItem, key) => 
          <Grid item className={classes.item} key={key}>
            <Typography className={classes.paper} >
              <MyLink text={listItem} />
            </Typography>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default Navbar;
