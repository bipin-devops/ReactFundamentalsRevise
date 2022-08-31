import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Bipin",
    age: 28,
    message: "Hello world",
  });
  const [name, setName] = useState("Bipin");
  const [age, setAge] = useState(28);
  const [message, setMessage] = useState("Hello World");

  const changeMessage = () => {
    // setPerson({ ...person, message: "Software Engineer" });
    setMessage("Software Engineer");
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button type="button" className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
