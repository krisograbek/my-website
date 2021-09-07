import React from "react";
import { Grid, Link } from "@material-ui/core";
import books from './data/books.json'


function FavBooks() {
  const bookKeys = Object.keys(books);

  return (
    <Grid item>
      <h1>Favorite Books</h1>
      {bookKeys.map((bookKey, id) =>
        <div key={id}>
          <h1>{bookKey}</h1>
          {books[bookKey].map((book, key) =>
            <Grid item key={key}>
              <Link
                href={book.link}
                target="_blank"
                rel="noreferrer"
              >
                {book.title}
              </Link> by
              {
                book.authorLink ?
                  <Link href={book.authorLink}> {book.author} </Link> :
                  <span> {book.author} </span>
              }
              {/* <p>What's this book about? {book.description}</p> */}
              <p>Why this book?</p>
              <div>
                {
                  book.impact
                }
              </div>
              <hr />
            </Grid>
          )}
        </div>
      )}
    </Grid >
  )
}

export default FavBooks;
