import React from "react";
import "./home.css";
import logo from "../../assets/images/home.png";
const Home = () => {
  return (
    <div className="home">
      <div>
        <img
          src={logo}
          width="
322"
          height="300"
        ></img>
      </div>
      <div style={{ display: "flex", color: "#345B63" }}>
        <h2 style={{ paddingRight: "10px", borderRight: "1px solid #345B63" }}>
          PLAY TO EARN
        </h2>
        <h2 style={{ paddingLeft: "10px" }}>COLLECT NFT's</h2>
      </div>
      <div>
        <button className="primarybtn">PLAY NOW</button>
      </div>
    </div>
  );
};

export default Home;
