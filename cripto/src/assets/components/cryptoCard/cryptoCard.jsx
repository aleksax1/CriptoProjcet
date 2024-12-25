import { Avatar, Card } from "antd";
import React from "react";
function CryptoCard({ coin }) {
  const { Meta } = Card;
  return (
    <Card
      style={{ width: 200, height: 150,g }}
      // cover={
      //   <img
      //     style={{ width: 300, height: 300 }}
      //     alt="example"
      //     src={coin.iconUrl}
      //   />
      // }
      actions={[]}
    >
      <Meta
        avatar={<Avatar src={coin.iconUrl} />}
        title={`${coin.name} (${coin.symbol})`}
        description={
          <div>
            <div>Price: {parseFloat(coin.price).toFixed(2)} USD</div>
            <h3
              style={{
                color: coin.change > 0 ? "green" : "red",
              }}
            >
              {coin.change}%
            </h3>
          </div>
        }
      />
    </Card>
  );
}
export default CryptoCard;
