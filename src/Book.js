import React from "react";
import BookAuthor from "./BookAuthor";
import BookImage from "./BookImage";
import BookTitle from "./BookTitle";
import BookVote from "./BookVote";

const Book = (props) => {
  const {
    bookImagge,
    bookTitle,
    bookAuthor,
    bookVote,
    id,
    number,
    displayValue,
  } = props; // destructuring concept of JavaScript..
  return (
    <article className="book">
      <span className="displayNumber"> {`# ${number + 1}`}</span>
      <img src={bookImagge} alt={bookTitle} />
      <button
        onClick={() => {
          displayValue(); //how do we pass value from here to the top component code..
          console.log({ bookTitle });
        }}
      >
        Display Title
      </button>
      <h3> {bookTitle} </h3>
      <h4> {bookAuthor} </h4>
      <BookVote />
    </article>
  );
};

export default Book;
