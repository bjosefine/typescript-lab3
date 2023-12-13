import { ArrowIcon } from "../assets/icons/ArrowIcon";
import { CartIcon } from "../assets/icons/CartIcon";
import { HeartFilledIcon } from "../assets/icons/HeartFilledIcon";
import { HeartIcon } from "../assets/icons/HeartIcon";
import { LoadingIcon } from "../assets/icons/LoadingIcon";
import { ProfileIcon } from "../assets/icons/ProfileIcon";
import { SearchIcon } from "../assets/icons/SearchIcon";
import { Button } from "../components/Button";
import HeaderImage from "../assets/images/header.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      {/* Home header  */}
      <div className="bg-black w-screen h-screen relative sm:-mt-12">
        <img
          src={HeaderImage}
          alt="Header image"
          className="w-auto h-full object-cover absolute right-0"
        />
        <div className="h-full w-1/2 absolute top-0">
          <div className="h-full flex flex-col gap-10 justify-center text-white w-3/4 m-auto">
            <p className="uppercase font-xs tracking-widest">Store name</p>
            <p className="text-6xl tracking-tight sm:text-8xl uppercase font-secondary flex flex-col">
              <span>new</span>
              <span>arrival</span>
            </p>
            <Link to="/products">
              <Button label="Shop now" icon={<ArrowIcon />} type="header" />
            </Link>
          </div>
        </div>
      </div>
      {/* Home section */}
      <div className="w-screen h-screen bg-orange-200">
        <p>section 1</p>
      </div>
      <div className="w-screen h-screen bg-red-200">
        <p>section 2</p>
      </div>
      {/* Components  */}
      <div className="hidden">
        <Button label="black" type="black" />
        <Button label="white" type="white" />
        <Button label="header" type="header" />
        <Button label="with icon" type="white" icon={<HeartIcon />} />
        <HeartFilledIcon />
        <HeartIcon />
        <CartIcon />
        <SearchIcon />
        <ProfileIcon />
        <ArrowIcon />
        <LoadingIcon />
      </div>
    </>
  );
};
