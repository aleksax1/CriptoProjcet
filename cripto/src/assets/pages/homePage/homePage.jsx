import { Button, Flex } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CryptoCard from "../../components/cryptoCard/cryptoCard.jsx";
import baner from "./baner.png";
import "./homePage.css";
function HomePage() {
  
  const navigate = useNavigate();
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  {
    /*api call*/
  }
  const fetchCoins = async () => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coins",
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        tiers: "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "6",
        offset: "0",
      },
      headers: {
        "x-rapidapi-key": "0d173c76c2msh0cab6bcaa89f2ccp18f8f4jsn338a476a3b90",
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      },
    };
    setLoading(false);
    try {
      const response = await axios.request(options);
      setCoins(response.data.data.coins);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div>
      <div className="baner">
        <h1 style={{ color: "aliceblue" }}>Home page</h1>
        <img src={baner} alt="Baner" className="" />
      </div>

      <div className="conteiner">
        <div className="titleDiv">
          <h3>Explore crypto like Bitcoin, Ethereum, and Dogecoin</h3>
          <h4>
            Simply and securely buy, sell, and manage hundreds of
            cryptocurrencies.
          </h4>
          <Button
            type="primary"
            shape="round"
            style={{ height: "6vh", width: "8vw" }}
            onClick={() => navigate("/cripto")}
          >
            See all
          </Button>
        </div>
        <div className="cardsDiv">
          {loading ? (
            <h3>Loading...</h3>
          ) : coins.length > 0 ? (
            coins.map((coin) => <CryptoCard key={coin.id} coin={coin} />)
          ) : (
            <h3>CONTENT SOON</h3>
          )}
        </div>
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
            maxLength={40}
            placeholder="YOUR EMAIL"
            style={{ height: 35, resize: "none" }}
          />
          <TextArea
            showCount
            maxLength={150}
            placeholder="SEND MESSAGE"
            style={{ height: 160, resize: "none" }}
          />
        </Flex>
        <Button type="primary" className="btn" shape="round">
          SUBMIT
        </Button>
      </div>
    </div>
  );
}
export default HomePage;
