import { Grid } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router";
import About from "./About";
import Blog from "./Blog";
import FavBooks from "./FavBooks";
import Home from "./Home";
import Journal from "./Journal";
import Models from "./Models";
import SmallWins from "./SmallWins";

function Content(){

  return (
    <Grid container>
      <Grid item>
      <Switch>
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
        <Route path="/models">
          <Models />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      </Grid>
    </Grid>
  )
}

export default Content;
