import { useState } from "react";
import { ArrowDownIcon } from "../assets/icons/ArrowDownIcon";

interface DropdownButtonProps {
  label: string;
  categories: string[];
}

export const DropdownButton = ({ label, categories }: DropdownButtonProps) => {
  const [isDropDown, setIsDropDown] = useState(false);
  return (
    <>
      <div
        className="cursor-pointer flex w-full items-center justify-center p-2 relative"
        onClick={() => setIsDropDown(!isDropDown)}
      >
        <p>{label}</p>
        <div className="pt-1">
          <ArrowDownIcon className="w-5 h-5" />
        </div>
        {isDropDown && (
          <div className="absolute top-8 bg-white border border-black w-24">
            {categories.map((category, index) => (
              <div key={index}>{category}</div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
