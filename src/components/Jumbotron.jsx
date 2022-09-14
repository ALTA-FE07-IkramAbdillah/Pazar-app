import React from "react";
import ciwi from "../assets/bg.jpg";

function Jumbotron() {
  return (
    <div className="hero">
      <div className="card bg-dark text-black border-0">
        <img src={ciwi} className="card-img" alt="Background" height="600px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0"> NEW SEASON COMING </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
