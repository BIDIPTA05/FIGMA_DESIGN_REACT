import React from "react";
import "./index.css";

//TODO : replace all id with class
//TODO : refactor the code as much as possible

const App = () => {
  return (
    <div id="main">
      <h3>LAZY GUY</h3>
      <div>
        <div className="title-subtitle-wrapper">
          <h1>
            Come to learn,
            <br />
            Go to serve
          </h1>
          <p>
            Explore your creativity with thousands of <br /> inspiring classes
            of design and illustrations
          </p>
        </div>
        <div className="action-btns">
          <button className="btn contained">Demo class</button>
          <button className="btn outlined">Main features</button>
        </div>
      </div>
      <div id="image">
        <img src="../src/image.png" height="400px" />
      </div>
    </div>
  );
};

export default App;
