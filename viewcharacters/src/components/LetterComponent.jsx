import React from "react";

const LetterComponent = ({ text }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {text.split("").map((char, index) => (
        <div
          key={index}
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "lightblue",
            margin: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.5em",
          }}
        >
          {char}
        </div>
      ))}
    </div>
  );
};

export default LetterComponent;
