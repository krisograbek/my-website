import { Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import books from './data/books.json';
import "./Links.css";

function FavBooks() {
  const bookKeys = Object.keys(books);

  return (
    <Grid item>
      <h1>Favorite Books</h1>
      {bookKeys.map((bookKey, id) =>
        <div key={id}>
          <h4>{bookKey}</h4>
          {books[bookKey].map((book, key) =>
            <Grid item key={key}>
              <Link
                className="LinkStyle external"
                href={book.link}
                target="_blank"
                rel="noreferrer"
              >
                {book.title}
              </Link> by
              <span> {book.author} </span>
              {/* <p>What's this book about? {book.description}</p> */}
              <p>Why this book?</p>
              <div>{book.impact}</div>
              <hr />
            </Grid>
          )}
        </div>
      )}
    </Grid >
  )
}

export default FavBooks;
