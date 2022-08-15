import React from "react";

const Length = ({ message }) => {
  const length = message.length;
  let output = " ";
  if (length > 10) {
    output = "Too long";
  } else {
    output = message;
  }
  return <div>{output}</div>;
};

export default Length;
