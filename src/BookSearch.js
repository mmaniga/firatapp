import React from "react";
import BookList from "./BookList";

const BookSearch = () => {
  const handleBookSearch = (e) => {
    console.log("Book Id to search = " + e.target.value);
    //BookList.displayValue();
    //BookList.getBook(e.target.value);
  };
  const handleProductNameInputFormInput = (e) => {
    console.log("Book to get is " + e.target.value);
    console.log("Book Name is " + BookList.get(e.target.value));
    //console.log("Handle form Input");
  };

  const handleProductNameFormSubmision = (e) => {
    e.preventDefault();
    console.log("Form Sumitted.....");
    console.log(e.target.name);
  };
  const handleProducDescInputFormInput = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    //console.log("Handle form Input");
  };

  return (
    <section>
      <form>
        <div>
          <input
            type="text"
            name="Enter Book ID"
            onChange={handleBookSearch}
            style={{ margin: "1rem 0" }}
          ></input>
          <button type="submit" onClick={handleBookSearch}>
            {" "}
            Search Book{" "}
          </button>
        </div>
      </form>
    </section>
  );
};

export default BookSearch;
