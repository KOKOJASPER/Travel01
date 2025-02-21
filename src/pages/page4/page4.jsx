import React from "react";
import "./page4.css";
import Destination from "../../assets/images/choosedestination.svg";
import Payment from "../../assets/images/water-sport 1.png";
import Taxi from "../../assets/images/taxi 1.png";
import Greece from "../../assets/images/Rectangle 17.jpg";
import Option from "../../assets/images/OPTIONS.png";
const Page4 = () => {
  return (
    <div className="page4">
      <div className="left">
        <p>Easy and Fast</p>
        <h1>
          Book your next trip <br />
          in 3 easy steps
        </h1>
        <div className="Destination">
          <div className="destination">
            <img src={Destination} alt="" />
          </div>

          <p>
            <span>Choose Destination</span>
            <br />
            lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit.Urna, tortor tempus.
          </p>
        </div>
        <div className="Destination">
          <div className="payment">
            <img src={Payment} alt="" />
          </div>

          <p>
            <span>Make Payment</span>
            <br />
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit.Urna, tortor tempus.
          </p>
        </div>
        <div className="Destination">
          <div className="taxi">
            <img src={Taxi} alt="" />
          </div>

          <p>
            <span>Reach Airport on Selected Date</span>
            <br /> Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit.Urna, tortor tempus.
          </p>
        </div>
      </div>
      <div className="trip-greece-card">
        <img src={Greece} alt="" />
        <h3>Trip To Greece </h3>
        <p>
          <span>14-29 June</span>
          by Robbin joseph
        </p>
        <img src={Option} alt="" />
        <p>24 people going</p>
      </div>
    </div>
  );
};

export default Page4;
