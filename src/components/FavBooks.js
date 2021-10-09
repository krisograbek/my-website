import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import books from './data/books.json';
import "./Links.css";

const useStyles = makeStyles(() => ({
  author: {
    fontWeight: 800,
    fontSize: 'calc(8px + 1vmin)'
  }
}));

function FavBooks() {
  const classes = useStyles();

  const bookKeys = Object.keys(books);

  return (
    <Grid item xs={8}>
      <h1>Favorite Books</h1>
      <Grid
        container
        direction="column"
        spacing={1}
      >
        <Grid item>
          Quote: Read more. It allows you to borrow someone else's brain.
        </Grid>
        <Grid item>
          <Typography>
            The list of my favorite books. To each one, I write why it made this list.
            For categories other than Data Science, I explain how a book impacted my life.
            I've split them into {bookKeys.length} categories:
            <ul>
              {bookKeys.map((cat) =>
                <li>{cat}</li>
              )}
            </ul>
          </Typography>
        </Grid>
        {bookKeys.map((bookKey, id) =>
          <Grid item key={id}>
            <h4>{bookKey}</h4>
            <Grid
              container
              direction="column"
              spacing={1}
            >
              {books[bookKey].map((book, key) =>
                <Grid item key={key}>
                  <Grid
                    container
                    direction="column"
                    spacing={1}
                  >
                    <Grid item>
                      <Typography>
                        <Link
                          className="LinkStyle external"
                          to={{
                            pathname: `${book.link}`
                          }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {book.title}
                        </Link>
                      </Typography>
                      <Typography component="div" className={classes.author}>
                        {book.authorLink ?
                          <Link
                            className="LinkStyle external"
                            to={{
                              pathname: `${book.authorLink}`
                            }}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {book.author}
                          </Link>
                          :
                          book.author
                        }
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography>Why this book?</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>{book.impact}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid >
  )
}

export default FavBooks;
