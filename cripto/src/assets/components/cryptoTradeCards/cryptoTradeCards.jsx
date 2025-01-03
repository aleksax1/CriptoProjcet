import {
  HeartFilled,
  HeartOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import "./cryptoTradeCards.css";

function CryptotradeCards({ coins }) {
  const { favorites, setCoinToFavorites } = useContext(AppContext);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", padding: "5vh 0" }}
    >
      <table style={{ width: "90%" }}>
        <tbody>
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
          {coins.map((coin) => {
            const isFavorite = favorites.some(
              (favorite) => favorite.uuid === coin.uuid
            );
            return (
              <tr
                key={coin.uuid}
                style={{
                  borderBottom: "1px solid black",
                }}
              >
                <td style={{ border: "black" }}>
                  <div className="iconDiv" style={{ gap: "5px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
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
                <td style={{}}>
                  <LineChartOutlined />
                </td>
                <td
                  style={{
                    color: coin.change > 0 ? "green" : "red",
                  }}
                >
                  {coin.change}%
                </td>
                <td>${coin.marketCap}</td>
                <td>{coin["24hVolume"]} pc.</td>
                <td>{coin.symbol}</td>
                <td>
                  <Button
                    type="primary"
                    shape="round"
                    style={{ height: "5vh" }}
                    icon={isFavorite ? <HeartFilled /> : <HeartOutlined />}
                    onClick={() => setCoinToFavorites(coin)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CryptotradeCards;
