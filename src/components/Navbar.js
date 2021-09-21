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
    textAlign: 'center',
    // background: theme.palette.success.light,
  }
}));

function Navbar(props) {
  const classes = useStyles();


  return (
    <Grid container className={classes.grid}>
      {props.navList.map((listItem, key) =>
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
