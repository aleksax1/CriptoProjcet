import { StockOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import "./cryptoTradeCards.css";
function CryptotradeCards({ coins }) {
  const gridStyle = {
    width: "100%",
    textAlign: "center",
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" , padding:"5vh 0"}}>
      <table style={{ width: "90%" }}>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Charts</th>
          <th>Change</th>
          <th>Marketcup</th>
          <th>Volume</th>
          <th>Suply</th>
          <th>Trade</th>
        </tr>
        {coins.map((coin) => (
          <tr key={coin.uuid} style={{border:"black"}}>
            <td>
              <div className="iconDiv" style={{gap:"5px"}}> 
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <img
                    src={coin.iconUrl}
                    alt={coin.name}
                    style={{ width: "30px" }}
                  />
                </div>
                <div>
                  <div>{coin.name}</div>
                  <div>{coin.symbol}</div>
                </div>
              </div>
            </td>
            <td>${parseFloat(coin.price).toFixed(2)}</td>
            <td>
              <StockOutlined />
            </td>
            <td
              style={{
                color: coin.change > 0 ? "green" : "red",
              }}
            >
              {coin.change}%
            </td>
            <td>${coin.marketCap}</td>
            <td>${coin["24hVolume"]}</td>
            <td>
              {coin.supply?.circulating} {coin.symbol}
            </td>
            <td>
              <Button type="primary">Trade</Button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default CryptotradeCards;
