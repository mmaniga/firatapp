import React from "react";
import Book from "./Book";
import BookSearch from "./BookSearch";

const bookLists = [
  {
    bookTitle: "It Ends with Us: A Novel",
    bookAuthor: "Colleen Hoover",
    bookImagge: "./images/Book1.jpg",
    bookVote: 0,
    id: 1,
  },
  {
    bookTitle: "Spare",
    bookAuthor: "Prince Harry The Duke of Sussex",
    bookImagge: "./images/Book2.jpg",
    bookVote: 0,
    id: 2,
  },
  {
    bookTitle: "It Starts with Us: A Novel (It Ends with Us)",
    bookAuthor: "Colleen Hoover",
    bookImagge: "./images/Book3.jpg",
    bookVote: 0,
    id: 3,
  },
  {
    bookTitle: "Saved: A War Reporter's Mission to Make It Home",
    bookAuthor: "Benjamin Hall",
    bookImagge: "./images/Book4.jpg",
    bookVote: 0,
    id: 4,
  },
];

const BookList = () => {
  const getBook = (id) => {
    const book = bookLists.find((book) => book.id === id);
    console.log("Book is " + book.bookTitle);
    //return <Book {...book} />;
  };

  const displayValue = () => {
    console.log("display Value invoked");
  };
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <span></span>
      <BookSearch></BookSearch>

      <section className="booklist">
        {bookLists.map((book, index) => {
          // in the map the second parameter is an Index
          return (
            <Book
              {...book}
              key={book.id}
              number={index}
              displayValue={displayValue}
            />
          ); // spread operator concepts...
        })}
      </section>
    </>
  );
};

/*
</section>
  return (
    <section className='booklist'>
      <Book bookTitle={firstBook.bookTitle} bookAuthor={firstBook.bookAuthor}  bookImagge = {firstBook.bookImagge}> 
        <p> Book descriptions details..</p> 
        <button>Click Me</button> 
      </Book>
      <Book bookTitle={secondBook.bookTitle} bookAuthor={secondBook.bookAuthor}  bookImagge = {secondBook.bookImagge}/>
      <Book bookTitle={thirdBook.bookTitle} bookAuthor={thirdBook.bookAuthor}  bookImagge = {thirdBook.bookImagge}/>
      <Book bookTitle={fourthBook.bookTitle} bookAuthor={fourthBook.bookAuthor}  bookImagge = {fourthBook.bookImagge}/>
    </section>
  )

*/

export default BookList;
