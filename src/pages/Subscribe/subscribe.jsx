import React from "react";
import "./Subscribe.css";

const subscribe = () => {
  return (
    <div className="Subscribe">
      <h3>
        Subscribe to get information, latest news and other
        <br /> interesting offers about Jadoo
      </h3>
      <form>
        <input type="text" placeholder="Your Email Address" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default subscribe;
