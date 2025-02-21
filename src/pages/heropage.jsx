import React from "react";
import traveler from "../assets/images/Traveller 1.png";
import "./heropage.css";
import polygon from "../assets/images/Polygon 1.png";
const HeroPage = () => {
  return (
    <div className="heropage">
      <div>
        <p className="destinations">BEST DESTINATIONS AROUND THE WORLD</p>
        <h1>
          Travel, enjoy
          <br /> and live a new
          <br /> and full life
        </h1>
        <p className="text_p">
          Experience the best and easiest way to <br />
          travel around the globe without stress. <br />
          best flights tickets and affordable hotels.
        </p>
        <span>
          <button>Find out more</button>
          <button className="Demo">
            <img src={polygon} alt="polygon" />
          </button>
          play demo
        </span>
      </div>
      <div>
        <img src={traveler} alt="Traveller" />
      </div>
    </div>
  );
};

export default HeroPage;
