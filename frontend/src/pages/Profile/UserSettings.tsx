import { Link } from "react-router-dom";
import { ArrowBackIcon } from "../../assets/icons/ArrowBackIcon";
export const UserSettings = () => {
  return (
    <>
      <div>
        <Link to="/profile">
          <ArrowBackIcon />
        </Link>
      </div>
      <p>hello settings</p>
    </>
  );
};
