import { Link } from "react-router-dom";
import { useState, useContext } from "react";

import { UserContext } from "../contexts/UserContext";
import { FavoriteContext } from "../contexts/FavoriteContext";
import { CartContext } from "../contexts/CartContext";

import { CartIcon } from "../assets/icons/CartIcon";
import { HeartIcon } from "../assets/icons/HeartIcon";
import { HamburgerClose } from "../assets/icons/HamburgerClose";
import { HamburgerOpen } from "../assets/icons/HamburgerOpen";
import { ProfileIcon } from "../assets/icons/ProfileIcon";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userContext = useContext(UserContext);
  const user = userContext ? userContext.user : null;
  const favoriteContext = useContext(FavoriteContext);
  const cartContext = useContext(CartContext);
  return (
    <>
      <div
        className="sm:hidden fixed top-0 right-0 p-2 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <HamburgerClose className="text-white w-8 h-8" />
        ) : (
          <HamburgerOpen className="w-8 h-8" />
        )}
      </div>
      <nav
        className={`z-40 fixed sm:sticky top-0 w-full h-full transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } bg-black text-white sm:translate-y-0 sm:bg-white sm:text-black sm:h-12 sm:w-full sm:flex sm:justify-between ${
          isOpen
            ? "transition-all duration-200 ease-in-out"
            : "sm:transition-none"
        }`}
      >
        <div className="w-10/12 h-full flex flex-col sm:flex-row gap-8 items-center m-auto sm:justify-between sm:w-full">
          <div className=" w-full sm:hidden">
            <p>Name for site</p>
          </div>
          {/* NAV LINKS CONTAINER */}
          <div className="w-full gap-3 uppercase text-4xl h-80 flex flex-col justify-end sm:flex-row sm:h-12 sm:p-2 sm:gap-2 sm:items-center sm:text-base sm:justify-start">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/products" onClick={() => setIsOpen(false)}>
              Products
            </Link>
          </div>
          {/* ICONS CONTAINER */}
          <div className="w-full uppercase flex flex-col sm:flex-row sm:items-center sm:p-2 sm:gap-2 sm:justify-end">
            <Link to="/cart">
              <div className="p-1 flex justify-between border-t border-b gap-2 sm:border-none">
                <span className="flex gap-2 items-center">
                  <CartIcon /> <p className="text-sm sm:hidden">Cart</p>
                </span>
                <span>
                  <p className="cartCounter text-sm">
                    {cartContext?.cartCount}
                  </p>
                </span>
              </div>
            </Link>
            <Link to="favorite">
              <div className="p-1 flex justify-between border-b gap-2 sm:border-none">
                <span className="flex gap-2 items-center">
                  <HeartIcon /> <p className="text-sm sm:hidden">Favourites</p>
                </span>
                <span>
                  <p className="text-sm">{favoriteContext?.favoritesCount}</p>
                </span>
              </div>
            </Link>
            <div
              id="navProfile"
              className="p-1 flex justify-between border-b gap-2 sm:border-none"
            >
              <Link
                to={user ? "/profile" : "/login"}
                onClick={() => setIsOpen(false)}
              >
                <span className="flex gap-2 items-center">
                  <ProfileIcon />{" "}
                  <p className="text-sm sm:hidden">
                    {user ? "Profile" : "Login"}
                  </p>
                </span>
              </Link>
            </div>
          </div>
          {/* EXTRA LINKS CONTAINER */}
          <div className="w-full text-sm uppercase sm:hidden">
            <p>Employe</p>
            <p>Privacy</p>
          </div>
        </div>
      </nav>
    </>
  );
};
