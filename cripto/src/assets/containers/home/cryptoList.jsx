import {
  ArrowDownOutlined,
  InfoCircleOutlined,
  RiseOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CryptotradeCards from "../../components/cryptoTradeCards/cryptotradeCards";

function CryptoList() {
  const [coins, setCoins] = useState([]);

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
        limit: "15",
        offset: "0",
      },
      headers: {
        "x-rapidapi-key": "0d173c76c2msh0cab6bcaa89f2ccp18f8f4jsn338a476a3b90",
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setCoins(response.data.data.coins);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(coins);
  useEffect(() => {
    fetchCoins();
  }, []);
  return (
    <>
      <div className="coinContainer">
        <h2>Cripto prices</h2>
        <div className="filterBtns">
          <Button type="primary" icon={<InfoCircleOutlined />}>
            All assets
          </Button>
          <Button
            style={{ marginLeft: "3px" }}
            type="primary"
            icon={<RiseOutlined />}
          >
            Tradable
          </Button>{" "}
          <Button type="primary" icon={<SearchOutlined />}>
            Ainers
          </Button>{" "}
          <Button type="primary" icon={<ArrowDownOutlined />}>
            Losers
          </Button>
        </div>
        <CryptotradeCards coins={coins} />
      </div>
    </>
  );
}

export default CryptoList;
