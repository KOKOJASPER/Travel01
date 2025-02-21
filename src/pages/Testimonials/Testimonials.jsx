import React from "react";
import "./Testimonials.css";
import Image1 from "../../assets/images/Image1.png";

const Testimonials = () => {
  return (
    <div className="Testimonials">
      <span className="test-m">
        <h3>Testimonials</h3>
        <h2>
          What People Say
          <br /> About Us.
        </h2>
      </span>

      <div className="comment">
        <img src={Image1} alt="img" />
        <p className="test-1">
          "The services was awesome and
          <br /> seemless. It was a wonderful <br />
          experiencedoing business <br />
          with them. I strongly recommend <br />
          anybody to Jadoo travels."
        </p>
        <br />
        <h5>Jasper K</h5>
        <p>Texas, USA</p>
      </div>
    </div>
  );
};

export default Testimonials;
