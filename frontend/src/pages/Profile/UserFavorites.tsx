import { useEffect, useContext, useState } from "react";
import { FavoritesInterface } from "../../interface/interface";
import { UserContextInterface } from "../../contexts/UserContext";
import { UserContext } from "../../contexts/UserContext";

import { ArrowBackIcon } from "../../assets/icons/ArrowBackIcon";
import { Link } from "react-router-dom";
import { AddToFavorite } from "../../components/AddToFavorite";

export const UserFavorites = () => {
  const userContext = useContext(UserContext) as UserContextInterface;
  const { user } = userContext;
  const [favorites, setFavorites] = useState<FavoritesInterface[]>([]);
  console.log({ user });
  console.log({ favorites });
  console.log(user?.userid);

  useEffect(() => {
    fetch(`/api/favorites/${user?.userid}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}`);
        }
        return response.json();
      })
      .then((result: FavoritesInterface[]) => {
        setFavorites(result);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [user?.userid, favorites]);

  return (
    <>
      <div>
        <Link to="/profile">
          <ArrowBackIcon />
        </Link>
      </div>
      <div className="w-full">
        <p className="font-secondary text-4xl tracking-tight text-center">
          Your Favorites
        </p>
        <div className="bg-orange-200 w-11/12 mx-auto flex flex-wrap gap-3 justify-center items-center">
          {favorites.map((favorite) => (
            <div
              key={favorite.favoriteid}
              className="bg-green-200 flex flex-col items-start w-[200px]"
            >
              <div className="flex flex-col justify-center items-center">
                <img src={favorite.productimg} className="w-full" />
                <p>{favorite.productname}</p>
                <p>
                  {favorite.productprice} <span>$</span>
                </p>
                <AddToFavorite
                  userId={user?.userid || 0}
                  productId={favorite.productid}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
