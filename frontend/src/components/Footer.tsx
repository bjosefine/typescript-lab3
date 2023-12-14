import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { KlarnaIcon } from "../assets/icons/KlarnaIcon";
import { MastercardIcon } from "../assets/icons/MastercardIcon";
import { PinterestIcon } from "../assets/icons/PinterestIcon";

export const Footer = () => {
  return (
    <>
      <div className="bg-black w-screen text-white flex flex-col gap-2 sm:flex-row">
        <div className="p-2 flex-grow">Sitelogo</div>
        <div className="p-2 flex-grow flex flex-row justify-around sm:justify-center sm:gap-12">
          <div>
            <p>Products</p>
            <p>New</p>
            <p>Cart</p>
            <p>Favourites</p>
          </div>
          <div>
            <p>Login/Registraion</p>
            <p>Payment and Shipping</p>
            <p>Privacy</p>
            <p>Employe</p>
          </div>
        </div>
        <div className="p-2 flex-grow flex flex-row justify-between sm:justify-end sm:gap-2 sm:items-start">
          <div className="flex items-center gap-2">
            <InstagramIcon className="w-6 h-6" />
            <PinterestIcon className="w-6 h-6" />
          </div>
          <div className="flex items-center gap-2">
            <KlarnaIcon className="w-6 h-6" />
            <MastercardIcon className="w-6 h-6" />
          </div>
        </div>
      </div>
    </>
  );
};
