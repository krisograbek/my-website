import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import articles from "./data/articles.json";
import "./Links.css";

function Blog() {

  return (
    <Grid item xs={8}>
      <h1>Blog</h1>
      <Grid
        container
        direction="column"
        spacing={1}
      >
        <Grid item>
          <Typography>
            I enjoy writing. For me it is the best way to communicate. I've lost fluency in English.
            Writing gives me a needed time to think and tell something the right way. So far I wrote {articles.length} articles.
            Here's the full list of them along with a short description.
          </Typography>
        </Grid>
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
            <Typography>
              {article.description}
            </Typography>
          </Grid>
        )}
      </Grid>
    </Grid >
  )
}

export default Blog;
