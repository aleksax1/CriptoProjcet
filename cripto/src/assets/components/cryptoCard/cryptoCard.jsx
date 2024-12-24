import { Avatar, Card } from "antd";
import React from "react";
function CryptoCard({ coin }) { 
  const { Meta } = Card;
  const getCoinImage = (symbol) => {
    switch (symbol) {
      case "BTC":
        return "https://cryptologos.cc/logos/bitcoin-btc-logo.png"; 
      case "ETH":
        return "https://cryptologos.cc/logos/ethereum-eth-logo.png"; 
      case "USDT":
        return "https://cryptologos.cc/logos/tether-usdt-logo.png"; 
      case "XRP":
        return "https://thegivingblock.com/wp-content/uploads/2023/09/XRP-crypto-coin-icon-The-Giving-Block.png"; 
      case "BNB":
        return "https://cryptologos.cc/logos/binance-coin-bnb-logo.png"; 
      case "SOL":
        return "https://cryptologos.cc/logos/solana-sol-logo.png"; 
      case "DOGE":
        return "https://cryptologos.cc/logos/dogecoin-doge-logo.png"; 
      default:
        return "https://www.example.com/default-coin-logo.png"; 
    }
  };
    return (
      
        <Card
          style={{ width: 500 }}
          actions={[]}
        >
          <Meta
            avatar={
            <Avatar src={ getCoinImage(coin.symbol)} />
            }
            title={`${coin.name} (${coin.symbol})`} description={`Price: ${coin.quote.USD.price} USD`} // Display price from the quote object
          />
        </Card>
    );
  }
export default CryptoCard;