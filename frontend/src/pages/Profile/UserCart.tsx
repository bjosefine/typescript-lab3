import { Link } from "react-router-dom";
import { ArrowBackIcon } from "../../assets/icons/ArrowBackIcon";
export const UserCart = () => {
  return (
    <>
      <div>
        <Link to="/profile">
          <ArrowBackIcon />
        </Link>
      </div>
      <p>hello cart</p>
    </>
  );
};
