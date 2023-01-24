import React from 'react'
import './index.css'


const App = () => {
  return (
    <div id="main">
      <h3>LAZY GUY</h3>
      <div id="sub">
          <h1>Come to learn,</h1>
          <h1>Go to serve</h1>
          <p>Explore your creativity with thousands of <br /> inspiring classes of design and illustrations</p>  
          <button style={{ width: "200px", height: "79px", left: "109px", top: "716px", background: "#000000", color: "white" ,margin:"10px"}}>Demo class</button>
          <button style={{ width: "216px", height: "80px", left: "3299px", top: "715px", border: "1px solid #000000" }} >Main features</button>
        
      </div>

      <div id="image">
        <img src="../src/image.png" height="400px"/>
      </div>


    </div>
  )
}

export default App