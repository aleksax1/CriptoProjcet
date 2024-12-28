import axios from "axios";
import React, { useEffect } from "react";
import baner from "./baner.png";
import "./criptoPage.css";
import CryptoList from "../../containers/home/cryptoList";
import { Input } from "antd";
function CriptoPage() {
  const { Search } = Input;
 
  return (
    <div>
      <div className="baner">
        <h1 style={{ color: "aliceblue" }}>Crypto page</h1>
        <img src={baner} alt="Baner" className="" />
      </div>
      <div className="container"></div>
      <div className="Search">
        <h2>Explore the cryptoecnomy</h2>
        <h4>coin base index is up ...</h4>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
        />
      </div>
      <CryptoList/>
    </div>
  );
}

export default CriptoPage;
