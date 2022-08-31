import React from "react";

const ErrorExample = () => {
  let title = "Random Title";

  const changeTitle = () => {
    title = "New Title";
    console.log(title);
  };
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button type="button" className="" onClick={changeTitle}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
