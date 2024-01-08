import { Link } from "react-router-dom";
import { ArrowBackIcon } from "../assets/icons/ArrowBackIcon";

interface BackButtonProps {
  to: string;
}

export const BackButton = ({ to }: BackButtonProps) => {
  return (
    <div className="goBack">
      <Link to={`/${to}`}>
        <ArrowBackIcon />
      </Link>
    </div>
  );
};
