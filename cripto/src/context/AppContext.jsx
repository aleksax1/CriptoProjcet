import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const setCoinToFavorites = (coin) => {
    setFavorites((prevFav) => {
      if (prevFav.find((prev) => prev.uuid === coin.uuid)) {
        return prevFav.filter((prev) => prev.uuid !== coin.uuid);
      } else {
        return [...prevFav, coin];
      }
    });
  };

  const values = {
    favorites,
    setFavorites,
    setCoinToFavorites,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
