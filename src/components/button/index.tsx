const borderStyle = "border rounded-lg";
const filledStyle =
  "bg-black text-white rounded-lg font-bold border-black hover:bg-transparent hover:text-black ";
type ButtonProps = {
  text: string;
  hasBorder?: boolean;
  filled?: boolean;
};
export const Button = ({
  text,
  hasBorder = false,
  filled = false,
}: ButtonProps) => {
  return (
    <div
      className={`flex items-center justify-center px-4 py-2 ${
        hasBorder && borderStyle
      } ${filled && filledStyle}`}
    >
      {text}
    </div>
  );
};
