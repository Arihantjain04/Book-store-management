import React from "react";
import "../styles/loader.scss"

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="book">
        <div className="book__pg-shadow"></div>
        <div className="book__pg"></div>
        <div className="book__pg book__pg--2"></div>
        <div className="book__pg book__pg--3"></div>
        <div className="book__pg book__pg--4"></div>
        <div className="book__pg book__pg--5"></div>
      </div>
    </div>
  );
};

export default Loader;
