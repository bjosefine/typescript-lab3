import React from "react";
import { useContext, useState, useEffect } from "react";

import { Button } from "./Button";
import { HeartIcon } from "../assets/icons/HeartIcon";
import { HeartFilledIcon } from "../assets/icons/HeartFilledIcon";

import { FavoriteContext } from "../contexts/FavoriteContext";

interface AddToFavoriteProps {
  userId: number;
  productId: number;
  iconOnly?: boolean;
}

interface FavoriteProps {
  productid: number;
}

export const AddToFavorite: React.FC<AddToFavoriteProps> = ({
  userId,
  productId,
  iconOnly,
}) => {
  const favoriteContext = useContext(FavoriteContext);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch(`/api/favorites/${userId}`);
        if (response.ok) {
          const favorites = await response.json();
          const alreadyFavorite = favorites.some(
            (favorite: FavoriteProps) => favorite.productid === productId
          );
          setIsFavorite(alreadyFavorite);
          console.log(alreadyFavorite);
        }
      } catch (error) {
        console.error("Error fetching favorites", error);
      }
    };

    fetchFavorites();
  }, [userId, productId]);

  const handleAddToFavorite = async () => {
    if (isFavorite) {
      await removeFavorite();
    } else {
      await addFavorite();
    }
  };

  const addFavorite = async () => {
    const response = await fetch("/api/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userid: userId, productid: productId }),
    });

    if (response.ok) {
      console.log("yay new favorite");
      favoriteContext?.setFavoritesCount((prevCount) => prevCount + 1);
      setIsFavorite(true);
    } else {
      console.log("oh no failed to add favorite");
    }
  };

  const removeFavorite = async () => {
    const response = await fetch(`/api/favorites/${userId}/${productId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log("yay you removed the favorite");
      favoriteContext?.setFavoritesCount((prevCount) => prevCount - 1);
      setIsFavorite(false);
    } else {
      console.log("oh no you failed to remove favorite");
    }
  };

  if (iconOnly) {
    return (
      <div onClick={handleAddToFavorite} className="p-2 absolute">
        {isFavorite ? <HeartFilledIcon /> : <HeartIcon />}
      </div>
    );
  }

  return (
    <>
      <Button
        label="Add to favorite"
        type="white"
        icon={isFavorite ? <HeartFilledIcon /> : <HeartIcon />}
        onClick={handleAddToFavorite}
      />
    </>
  );
};
