import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <div>
      <div id="getStarted" className="g-wrapper">
        <div className="paddings innerWidth g-container">
          <div className="flexColCenter g-innercontainer">
          <span className="primaryText">Get started with Homyz</span>
          <span className="secondaryText">Subscribe and find super attractive price quotes from us.
          <br />
            Find your residence soon
          </span>
          <button className="button">
            <a href="mailto:madeehawaqas48@gmail.com">Get Started</a>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
