import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/Context";
import { UserContextInterface } from "../../contexts/Context";
import { Button } from "../../components/Button";
import { UserOrders } from "../../components/Profile/UserOrders";
import { ArrowBackIcon } from "../../assets/icons/ArrowBackIcon";
import { UserSettings } from "../../components/Profile/UserSettings";
import { UserCart } from "../../components/Profile/UserCart";
import { UserFavourites } from "../../components/Profile/UserFavourites";

export const UserProfile = () => {
  const userContext = useContext(UserContext) as UserContextInterface;
  const { user, setUser } = userContext;

  const [showUserOrders, setShowUserOrders] = useState(false);
  const [showUserSettings, setShowUserSettings] = useState(false);
  const [showUserCart, setShowUserCart] = useState(false);
  const [showUserFavourites, setShowUserFavourites] = useState(false);

  const handleLogout = () => {
    setUser(null);
    console.log(user, "am i logged out");
    window.location.replace("/");
  };

  useEffect(() => {
    console.log(user, "user profile");
  }, [user]);
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        {!showUserOrders &&
          !showUserSettings &&
          !showUserCart &&
          !showUserFavourites && (
            <>
              <p className="font-secondary text-4xl tracking-tight text-center">
                Hello {user?.userfirstname}!
              </p>
              <div className="uppercase p-5 gap-5 grid grid-cols-2 items-center justify-center m-auto sm:w-3/4 md:w-1/2">
                <div
                  onClick={() => setShowUserCart(true)}
                  className="bg-black text-white h-32 flex items-center justify-center"
                >
                  <p className="text-3xl">Cart</p>
                </div>
                <div
                  onClick={() => setShowUserFavourites(true)}
                  className="bg-black text-white h-32 flex items-center justify-center"
                >
                  <p className="text-3xl">Favorites</p>
                </div>
                <div
                  onClick={() => setShowUserOrders(true)}
                  className="bg-black text-white h-32 flex items-center justify-center"
                >
                  <p className="text-3xl">Orders</p>
                </div>
                <div
                  onClick={() => setShowUserSettings(true)}
                  className="bg-black text-white h-32 flex items-center justify-center"
                >
                  <p className="text-3xl">Settings</p>
                </div>
              </div>
              <Button onClick={handleLogout} label="log out" type="white" />
            </>
          )}
        {showUserOrders && (
          <>
            <ArrowBackIcon onClick={() => setShowUserOrders(false)} />
            <UserOrders />
          </>
        )}
        {showUserSettings && (
          <>
            <ArrowBackIcon onClick={() => setShowUserSettings(false)} />
            <UserSettings />
          </>
        )}
        {showUserCart && (
          <>
            <ArrowBackIcon onClick={() => setShowUserCart(false)} />
            <UserCart />
          </>
        )}
        {showUserFavourites && (
          <>
            <ArrowBackIcon onClick={() => setShowUserFavourites(false)} />
            <UserFavourites />
          </>
        )}
      </div>
    </>
  );
};
