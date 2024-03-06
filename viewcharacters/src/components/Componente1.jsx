import React from "react";

const Componente1 = ({ hasContent }) => {
  return (
    <div>
      <h1 style={{ color: hasContent ? "white" : "black" }}>View Characters</h1>
    </div>
  );
};

export default Componente1;
