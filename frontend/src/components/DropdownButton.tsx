import { useState } from "react";
import { ArrowDownIcon } from "../assets/icons/ArrowDownIcon";

interface DropdownButtonProps {
  label: string;
  categories: string[];
  onSelect: (category: string) => void;
}

export const DropdownButton = ({
  label,
  categories,
  onSelect,
}: DropdownButtonProps) => {
  const [isDropDown, setIsDropDown] = useState(false);
  return (
    <>
      <div
        className="DropdownButton cursor-pointer flex w-full items-center justify-center p-2 relative z-20"
        onClick={() => setIsDropDown(!isDropDown)}
      >
        <p>{label}</p>
        <div className="pt-1">
          <ArrowDownIcon className="w-5 h-5" />
        </div>
        {isDropDown && (
          <div className="absolute top-8 bg-white border border-black w-24">
            <div onClick={() => onSelect("")}>All</div>
            {categories.map((category, index) => (
              <div key={index} onClick={() => onSelect(category)}>
                {category}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
