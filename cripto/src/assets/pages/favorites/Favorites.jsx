import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import CryptotradeCards from "../../components/cryptoTradeCards/cryptotradeCards";
import "./favorites.css";
import CryptoCard from "../../components/cryptoCard/cryptoCard";
import FavoriteCard from "../../components/favoriteCard/FavoriteCard";
function Favorites() {
    const { favorites } = useContext(AppContext);
    
  return (
    <div className="glavni " style={{ }}>
      <div className="naslov">
        <h1>Favorites</h1>
      </div>
      <div className="favoritesDiv">
              {favorites.map((coin) => (
                  <>
            <FavoriteCard coin={coin} key={coin.uuid} className="criptoCard"  />
                  </>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
