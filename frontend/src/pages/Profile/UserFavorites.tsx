import { useEffect, useContext, useState } from "react";
import { FavoritesInterface } from "../../interface/interface";
import { UserContextInterface } from "../../contexts/UserContext";
import { UserContext } from "../../contexts/UserContext";

import { AddToFavorite } from "../../components/AddToFavorite";
import { BackButton } from "../../components/BackButton";
import { SadIcon } from "../../assets/icons/SadIcon";
import { Link } from "react-router-dom";

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
      <BackButton to="profile" />
      <div className="w-full gap-4">
        <p className="font-secondary text-4xl tracking-tight text-center">
          Your Favorites
        </p>

        {favorites.length > 0 ? (
          <div className="w-11/12 mx-auto p-2 flex flex-wrap gap-3 justify-center items-center">
            {favorites.map((favorite) => (
              <Link
                key={favorite.favoriteid}
                to={`/products/${favorite.productid}`}
              >
                <div className="flex flex-col items-start w-[200px]">
                  <div className="flex flex-col justify-center items-center">
                    <img src={favorite.productimg} className="w-full" />
                    <div className="w-full text-start">
                      <p>{favorite.productname}</p>
                      <p>{favorite.productprice}$</p>
                    </div>
                    <AddToFavorite
                      userId={user?.userid || 0}
                      productId={favorite.productid}
                      remove
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4">
            <SadIcon className="w-32 h-32" />
            <p>You haven't favorited anything yet</p>
          </div>
        )}
      </div>
    </>
  );
};
