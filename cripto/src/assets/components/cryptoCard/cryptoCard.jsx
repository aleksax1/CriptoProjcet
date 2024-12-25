import { Avatar, Card } from "antd";
import React from "react";
function CryptoCard({ coin }) { 
    const { Meta } = Card;
    return (
      
        <Card
        style={{ width: 300 }}
          cover={
            <img
              style={{width:300,height:300}}
              alt="example"
              src={coin.iconUrl}
            />
          }
          actions={[]}
        >
             <Meta
            avatar={
              <Avatar src={coin.iconUrl} />
            }
            title={`${coin.name} (${coin.symbol})`} description={`Price: ${parseFloat(coin.price).toFixed(2)} USD`} 
          />
        </Card>
    );
  }
export default CryptoCard;