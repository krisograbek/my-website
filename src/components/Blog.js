import { Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import articles from "./data/articles.json";
import "./Links.css";

function Blog() {

  return (
    <Grid item>
      <h1>Blog</h1>
      {articles.map((article, key) =>
        <Grid item key={key}>
          <Link
            className="LinkStyle external"
            to={{
              pathname: `${article.link}`
            }}
            target="_blank"
            rel="noreferrer"
          >
            {article.title}
          </Link>
        </Grid>
      )}
    </Grid >
  )
}

export default Blog;
