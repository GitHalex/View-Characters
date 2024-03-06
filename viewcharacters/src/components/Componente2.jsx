import React from "react";

const Componente2 = ({ handleInputChange }) => {
  return (
    <div>
      <input type="text" onChange={handleInputChange} className="input-style" />
    </div>
  );
};

export default Componente2;
