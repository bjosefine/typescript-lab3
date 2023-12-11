import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
    </>
  );
};
