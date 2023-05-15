import React, { useContext } from "react";

const Card = ({ children }) => {
  return (
    <div className="w-1/2 mx-auto h-full rounded-md relative p-8 border-2">
      {children}
    </div>
  );
};

export default Card;
