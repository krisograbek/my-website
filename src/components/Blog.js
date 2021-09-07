import React from "react";
import { Link } from "@material-ui/core";
import { Grid } from "@material-ui/core";


function Blog() {
  return (
    <Grid item>
      <h1>Blog</h1>
      <Link
        href="https://kris-ograbek-nlp.medium.com/simple-yet-powerful-an-introduction-to-named-entities-ce4fad33f217"
        target="_blank"
        rel="noreferrer"
      >
        Simple Yet Powerful: An Introduction to Named Entities
      </Link>
      <Link href="https://kris-ograbek-nlp.medium.com/pay-attention-to-your-neighbors-a-simple-approach-to-the-part-of-speech-tagging-f8aa4af0b313">
        Pay Attention to your Neighbors
      </Link>
    </Grid>
  )
}

export default Blog;
