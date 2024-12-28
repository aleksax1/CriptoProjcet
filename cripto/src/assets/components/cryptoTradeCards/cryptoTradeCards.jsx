import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import React, { useContext } from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import { AppContext } from "../../../context/AppContext";
import "./cryptoTradeCards.css";

function CryptotradeCards({ coins }) {
  const { favorites, setCoinToFavorites } = useContext(AppContext);
  console.log("favorites", favorites);

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
                  <ResponsiveContainer width={100}>
                    <LineChart data={coin.sparkline}>
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="price"
                        stroke={coin.color || "#8884d8"}
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </td>
                <td
                  style={{
                    color: coin.change > 0 ? "green" : "red",
                  }}
                >
                  {coin.change}%
                </td>
                <td>${coin.marketCap}</td>
                <td>{coin["24hVolume"]}</td>
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
