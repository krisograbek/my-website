import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import quotes from './data/quotes.json'
import "./Quote.css"

const useStyles = makeStyles(() => ({
  pad: {
    paddingBottom: '16px'
  }
}));

function Quotes() {
  const classes = useStyles();
  return (
    <Grid item xs={8}>
      {/* <Grid container
        direction="column"
        justifyContent="center"
        alignContent="center"
      > */}
      <h1>Quotes</h1>
      <Typography className={classes.pad} >
        My favorite quotes, that resonate the most. They tell a lot about the life I'm trying to live.
      </Typography>
      {quotes.map((quote) =>
        // <Grid item
        // >
        <blockquote>
          <p><q>{quote.quote}</q></p>
          <footer >{quote.author}</footer>
        </blockquote>
        // </Grid>
      )}
      {/* </Grid> */}
    </Grid>
  )
}

export default Quotes
