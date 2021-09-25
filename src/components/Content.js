import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router";
import About from "./About";
import Blog from "./Blog";
import FavBooks from "./FavBooks";
import Home from "./Home";
import Journal from "./Journal";
import Models from "./Models";
import Quotes from "./Quotes";
import SmallWins from "./SmallWins";

const useStyles = makeStyles(() => ({
  root: {
    padding: '30px',
    // maxWidth: '100%'
  }
}));

function Content() {
  const classes = useStyles();

  return (
    <Switch>
      <Grid
        container
        direction="column"
        className={classes.root}
        alignItems="stretch"
        alignContent="center"
      >
        {/* <Grid item> */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/journal">
          <Journal />
        </Route>
        <Route path="/smallwins">
          <SmallWins />
        </Route>
        <Route path="/favbooks">
          <FavBooks />
        </Route>
        <Route path="/quotes">
          <Quotes />
        </Route>
        <Route path="/models">
          <Models />
        </Route>
        <Grid item>
          <Route path="/about">
            <About />
          </Route>
        </Grid>
        {/* </Grid> */}
      </Grid>
    </Switch>
  )
}

export default Content;
