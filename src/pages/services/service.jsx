import React from "react";
import "./Service.css";
import Group from "../../assets/images/Group 48.png";
import Plane from "../../assets/images/Plane.png";
import Mic from "../../assets/images/mic 50.png";
import Search from "../../assets/images/Search 49.png";

const Service = () => {
  return (
    <>
      <div className="service">
        <span className="group">
          <img src={Group} alt="group" />
          <h3>Calculated Whether</h3>
          <p>
            Built Wicket longer
            <br /> admire do barton vanity
            <br /> itself do in it.
          </p>
        </span>
        <span className="plane">
          <img src={Plane} alt="plane" />
          <h3>Best flights</h3>
          <p>
            Engrossed listening.
            <br /> Park gate sell they <br /> west hard for the.
          </p>
        </span>

        <span className="mic">
          <img src={Mic} alt="mic" />
          <h3>Local events</h3>
          <p>
            Barton vanity itself do
            <br /> in it. Preferd to men <br />
            it engrossed listening.
          </p>
        </span>
        <span className="search">
          <img src={Search} alt="search" />
          <h3>Customization</h3>
          <p>
            We deliver out sourced
            <br />
            aviation services for
            <br /> military customers
          </p>
        </span>
      </div>
    </>
  );
};

export default Service;
