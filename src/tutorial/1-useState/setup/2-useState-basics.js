import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState);
  // const text = useState("Random Title")[0];

  // console.log(value, handlerFunction);

  const [text, setText] = useState("Random Title");
  const handleClick = () => {
    if (text === "Random Title") {
      setText("New Title");
    } else {
      setText("Random Title");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
