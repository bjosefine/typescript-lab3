import React, { useContext } from "react";
import { useState, useEffect } from "react";

import { UserContextInterface } from "./UserContext";
import { UserContext } from "./UserContext";

interface FavoriteContextProps {
  favoritesCount: number;
  setFavoritesCount: React.Dispatch<React.SetStateAction<number>>;
}

interface FavoriteProviderProp {
  children: React.ReactNode;
}

export const FavoriteContext = React.createContext<FavoriteContextProps | null>(
  null
);

export const FavoriteProvider = ({ children }: FavoriteProviderProp) => {
  const [favoritesCount, setFavoritesCount] = useState<number>(0);
  const userContext = useContext(UserContext) as UserContextInterface;
  const { user } = userContext;
  useEffect(() => {
    fetch(`/api/favorites/${user?.userid}`)
      .then((response) => response.json())
      .then((favorites) => {
        setFavoritesCount(favorites.length);
      })
      .catch((error) => {
        console.error("Error fetching favorites:", error);
      });
  }, [user?.userid, favoritesCount]);

  return (
    <FavoriteContext.Provider value={{ favoritesCount, setFavoritesCount }}>
      {children}
    </FavoriteContext.Provider>
  );
};
