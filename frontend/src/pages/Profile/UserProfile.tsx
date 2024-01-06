import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { UserContextInterface } from "../../contexts/UserContext";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export const UserProfile = () => {
  const userContext = useContext(UserContext) as UserContextInterface;
  const { user, setUser } = userContext;

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
        <>
          <p className="font-secondary text-4xl tracking-tight text-center">
            Hello {user?.userfirstname}!
          </p>
          <div className="uppercase p-5 gap-5 grid grid-cols-2 items-center justify-center m-auto sm:w-3/4 md:w-1/2">
            <Link to="/cart">
              <div className="bg-black text-white h-32 flex items-center justify-center">
                <p className="text-3xl">Cart</p>
              </div>
            </Link>
            <Link to="/favorite">
              <div className="bg-black text-white h-32 flex items-center justify-center">
                <p className="text-3xl">Favorites</p>
              </div>
            </Link>
            <Link to="/orders">
              <div className="bg-black text-white h-32 flex items-center justify-center">
                <p className="text-3xl">Orders</p>
              </div>
            </Link>
            <Link to="/settings">
              <div className="bg-black text-white h-32 flex items-center justify-center">
                <p className="text-3xl">Settings</p>
              </div>
            </Link>
          </div>
          <Button onClick={handleLogout} label="log out" type="white" />
        </>
      </div>
    </>
  );
};
