import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <nav className=" nav">
        <h1 className="jadoo">Jadoo</h1>
        <ul className="nav-bar">
          <li>Destination</li>
          <li>hotels</li>
          <li>flights</li>
          <li>bookings</li>
          <li>login</li>
          <li>sign-up</li>
          <li>
            <select>
              <option value="">EN</option>
              <option value="french">french</option>
              <option value="chinese">chinese</option>
              <option value="spanish">spanish</option>
              <option value="German">German</option>
              <option value="portugese">portugese</option>
              <option value="baltic">baltic</option>
            </select>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
