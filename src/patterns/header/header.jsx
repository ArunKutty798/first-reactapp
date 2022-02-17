import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} width="75" height="70" />
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/start">Getting Started</Link>
        <Link to="/tokenomics">Tokenomics</Link>
        <Link to="/roadmap">RoadMap</Link>
        <Link to="/whitepaper">WhitePaper</Link>
      </div>
      <div>
        <button className="btn">Connect Wallet</button>
      </div>
    </div>
  );
};

export default Header;
