import { Button, Flex } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import baner from "./baner.png";
import "./homePage.css";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import CryptoCard from "../../components/cryptoCard/cryptoCard.jsx";
function HomePage() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  {
    /*api call*/
  }
  const API_KEY = "8a86abda-c358-47b2-a017-b070bbd7d15d";
  const API_URL =
    "https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=6";

  const fetchingCoins = async () => {
    try {
      const response = await axios.get(API_URL, {
        headers: {
          "X-CMC_PRO_API_KEY": "8a86abda-c358-47b2-a017-b070bbd7d15d",
          Accept: "application/json",
        },
      });
      console.log(response.data, "coins data");
      setCoins(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error with fetching coins", error);
      setLoading(false);
    }
  };
  console.log(coins, "coins state");

  useEffect(() => {
    fetchingCoins();
  }, []);
  return (
    <div>
      <div className="baner">
        <img src={baner} alt="Baner" className="" />
      </div>
      <div className="conteiner">
        
          {loading ? (
            <h3>Loading...</h3>
          ) : coins.length > 0 ? (
            coins.map((coin) => (
              <CryptoCard key={coin.id} coin={coin} />
              
            ))
          ) : (
            <h3>CONTENT SOON</h3>
          )}
        </div>
      
      <div className="newsLetter">
        <h2>News letter</h2>
        <p>
          "Stay updated! Subscribe to our newsletter for the latest news,
          updates, and exclusive offers."
        </p>
        <Flex vertical gap={32}>
          <TextArea
            showCount
            maxLength={150}
            placeholder="disable resize"
            style={{ height: 180, resize: "none"}}
          />
        </Flex>
        <Button type="primary" className="btn">
          SUBMIT
        </Button>
      </div>
    </div>
  );
}
export default HomePage;
