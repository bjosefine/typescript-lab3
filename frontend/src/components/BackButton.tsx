import { Link } from "react-router-dom";
import { ArrowBackIcon } from "../assets/icons/ArrowBackIcon";

interface BackButtonProps {
  to: string;
}

export const BackButton = ({ to }: BackButtonProps) => {
  return (
    <div className="goBack p-2">
      <Link to={`/${to}`}>
        <ArrowBackIcon className="w-7 h-7" />
      </Link>
    </div>
  );
};
