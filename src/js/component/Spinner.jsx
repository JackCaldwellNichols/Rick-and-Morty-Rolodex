import React from "react";
import spinner from "/workspace/react-hello/src/Images/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={spinner}
      alt="loading"
      style={{
        width: "200px",
        margin: "auto",
        display: "block",
      }}
    />
  );
};

export default Spinner;
