import React from "react";
import "./Partners.css";
import Axon from "../../assets/images/Axon 27.png";
import Jetstar from "../../assets/images/Jetstar 28.png";
import Expedia from "../../assets/images/Expedia 29.png";
import Qantas from "../../assets/images/Qantas 30.png";
import Alitalia from "../../assets/images/Alitalia 31.png";

const Partners = () => {
  return (
    <div className="partners">
      <img src={Axon} alt="axon" />
      <img src={Jetstar} alt="jetstar" />
      <img src={Expedia} alt="expedia" />
      <img className="qantas" src={Qantas} alt="qantas" />
      <img className="Alitalia" src={Alitalia} alt="alitalia" />
    </div>
  );
};

export default Partners;
