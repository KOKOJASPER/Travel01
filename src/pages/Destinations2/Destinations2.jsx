import React from "react";
import "./Destinations2.css";
import Rome from "../../assets/images/Rome 14.png";
import London from "../../assets/images/London 14.jpg";
import Europe from "../../assets/images/Europe 14.png";
import Vector from "../../assets/images/Vector.png";

const Destinations2 = () => {
  return (
    <div className="Destination2">
      <div className="rome">
        <div>
          <img src={Rome} alt="rome" className="rome-img" />
        </div>
        <p>Rome, Italy $5,45k</p>
        <img src={Vector} alt="vector" />
        10 days Trip
      </div>
      <div className="london">
        <div>
          <img src={London} alt="rome" />
        </div>
        <p>Rome, Italy $5,45k</p>
        <img src={Vector} alt="vector" />
        10 days Trip
      </div>
      <div className="europe">
        <div>
          <img src={Europe} alt="rome" />
        </div>
        <p>Rome, Italy $5,45k</p>
        <img src={Vector} alt="vector" />
        10 days Trip
      </div>
    </div>
  );
};

export default Destinations2;
