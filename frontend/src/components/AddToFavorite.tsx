import React from "react";
import { Button } from "./Button";
import { HeartIcon } from "../assets/icons/HeartIcon";

interface AddToFavoriteProps {
  userId: number;
  productId: number;
}

export const AddToFavorite: React.FC<AddToFavoriteProps> = ({
  userId,
  productId,
}) => {
  const handleAddToFavoite = async () => {
    try {
      const response = await fetch("/api/favorites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userid: userId, productid: productId }),
      });

      if (response.ok) {
        const favoriteData = await response.json();
        console.log("yay you have a new favorite:", favoriteData);
      } else {
        console.log("oh no your favorite didn't add");
      }
    } catch (error) {
      console.error("FAIL", error);
    }
  };

  return (
    <>
      <Button
        label="Add to favorite"
        type="white"
        icon={<HeartIcon />}
        onClick={handleAddToFavoite}
      />
    </>
  );
};
