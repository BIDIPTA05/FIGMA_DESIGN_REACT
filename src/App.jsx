import React from "react";
import "./index.css";

const App = () => {
  return (
    <div className="main">
      <img src="https://www.linkpicture.com/q/lg_2.png" className="img1" />

      <div className="d2">
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

          <div className="action-btns">
            <button className="btn contained">Demo class</button>
            <button className="btn outlined">Main features</button>
          </div>
        </div>

        <img src="https://www.linkpicture.com/q/image_33.png" id="image" />
      </div>
    </div>
  );
};

export default App;
