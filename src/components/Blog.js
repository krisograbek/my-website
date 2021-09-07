import React from "react";
import { Link } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import articles from "./data/articles.json"


function Blog() {
  return (
    <Grid item>
      <h1>Blog</h1>
      {articles.map((article, key) =>
        <Grid item key={key}>
          <Link
            href={article.link}
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
