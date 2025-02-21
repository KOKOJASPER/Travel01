import React from "react";
import "./Footer.css";
import Facebook from "../../assets/images/Facebook Icon.png";
import Instagram from "../../assets/images/Instagram.png";
import Twitter from "../../assets/images/Twitter.png";
import Google from "../../assets/images/Google Play.png";
import Play from "../../assets/images/Play Store.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <span className="jadoof">
          <h3>Jadoo</h3>

          <p>
            Book your trip in minute, get full <br />
            Control for much longer.
          </p>
        </span>
        <figure>
          <p>Company</p>
          <br />
          <h5>
            About
            <br />
            Career
            <br />
            Mobile
          </h5>
        </figure>
        <span>
          <p>Contact</p>
          <br />
          <h5>
            Help/FAQ <br />
            Press
          </h5>
          <br />
          Affiliates
        </span>
        <span>
          <p>More</p>
          <br />
          <h5>
            Airlinefees
            <br />
            Airlines
            <br />
            Low fare tips
          </h5>
        </span>
        <span>
          <span className="Icons">
            <button className="facebook">
              <img src={Facebook} alt="facebook" />
            </button>
            <img src={Instagram} alt="instagram" />
            <button>
              <img src={Twitter} alt="twitter" />
            </button>
          </span>

          <p> Discover Our App</p>
          <img className="googol" src={Google} alt="google play" />
          <img src={Play} alt="play store" />
        </span>
      </div>
    </>
  );
};

export default Footer;
