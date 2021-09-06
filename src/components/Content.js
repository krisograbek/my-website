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

//   const list = [
//     "blog", 
//     "journal", 
//     "smallwins",
//     "favbooks",
//     "models",
//     "aboutme"
// ]

  return (
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
  )
}

export default Content;
