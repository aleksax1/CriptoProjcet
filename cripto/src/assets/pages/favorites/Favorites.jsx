import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";
import FavoriteCard from "../../components/favoriteCard/FavoriteCard";
import "./favorites.css";
import { Button } from "antd";
function Favorites() {
  const { favorites } = useContext(AppContext);
  const navigate = useNavigate();


    return (
      
    <div className="glavni">
      <div className="naslov">
        <h1>Favorites</h1>
      </div>
      <div className="favoritesDiv" style={{}}>
        {favorites.length > 0 ? (
          favorites.map((coin) => (
            <div key={coin.uuid} className="criptoCard">
              <FavoriteCard coin={coin} />
            </div>
          ))
              ) : (
                      <div style={{height:"35vh",display:'flex',flexDirection:"column",alignItems:'center',gap:"5vh"}}>
                          <h1>You dont have favorite products</h1>
                          <Button style={{width:"10vw"}} onClick={()=> navigate("/cripto")}>See all products</Button>
                      </div>
        )}
      </div>
    </div>
  );
}
export default Favorites;
