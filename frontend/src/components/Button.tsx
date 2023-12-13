interface ButtonProps {
  label: string;
  type: string;
  icon?: React.ReactNode;
}

export const Button = ({ label, type, icon }: ButtonProps) => {
  const baseStyle = "uppercase border border-black py-3 px-3 w-52";
  const flexStyle = icon ? "flex justify-between items-center" : "";
  const buttonStyle =
    type === "black"
      ? `${baseStyle} bg-black text-white ${flexStyle}`
      : type === "white"
      ? `${baseStyle} bg-white text-black ${flexStyle}`
      : type === "header"
      ? `${baseStyle} bg-black text-white border-white ${flexStyle}`
      : baseStyle;

  return (
    <>
      <button className={buttonStyle}>
        {label} {icon}
      </button>
    </>
  );
};
