import React, { useState } from "react";

const BookVote = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div>
      <h3>Book Vote </h3>
      <h3>{count}</h3>
      <button type="button" onClick={handleButtonClick} className="btn">
        {" "}
        UpVote
      </button>
    </div>
  );
};

export default BookVote;
