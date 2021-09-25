import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import quotes from './data/quotes.json'
import "./Quote.css"

const useStyles = makeStyles(() => ({
  quote: {
    color: 'red'
  },
  author: {
    color: 'green'
  }
}));

function Quotes() {
  const classes = useStyles();
  return (
    <Grid item
      xs={8}
    >
      <h3>Quotes</h3>
      {/* <Grid container
        direction="column"
        justifyContent="center"
        alignContent="center"
      > */}
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
