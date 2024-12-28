import { Avatar, Button, Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

function FavoriteCard({ coin }) {
    const navigate =useNavigate()
  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={<img alt="example" src={coin.iconUrl} style={{maxHeight:"35vh"}} />}
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
              <Button style={{marginTop:"2vh",height:'5vh',color:"rgb(14, 90, 153);"}} onClick={()=>navigate("/singleCoin")}>See more..</Button>
      </Card>
    </div>
  );
}

export default FavoriteCard;
