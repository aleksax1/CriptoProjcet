import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import CryptotradeCards from "../../components/cryptoTradeCards/cryptotradeCards";
import "./favorites.css";
import CryptoCard from "../../components/cryptoCard/cryptoCard";
import FavoriteCard from "../../components/favoriteCard/FavoriteCard";
import { useNavigate } from "react-router-dom";
function Favorites() {
    const { favorites } = useContext(AppContext);
    const navigate = useNavigate();

    
  
  
    return (
        <div className="glavni">
          <div className="naslov">
            <h1>Favorites</h1>
          </div>
          <div className="favoritesDiv">
            {favorites.map((coin) => (
              <div key={coin.uuid} className="criptoCard">
                <FavoriteCard coin={coin} />
              </div>
            ))}
          </div>
        </div>
      );
    }
export default Favorites;
