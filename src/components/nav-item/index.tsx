/// <reference types="vite-plugin-svgr/client" />
import { useState } from "react";
import ArrowDownIcon from "../../assets/images/icon-arrow-down.svg?react";
import ArrowUpIcon from "../../assets/images/icon-arrow-up.svg?react";
type NavItemProps = {
  text: string;
  children?: React.ReactNode;
};
export const NavItem = ({ text, children }: NavItemProps) => {
  const [selected, setSelected] = useState("");

  return (
    <div
      className="relative"
      onClick={() => children && setSelected(text !== selected ? text : "")}
    >
      <div className="flex space-x-4 cursor-pointer items-center">
        <span className="text-gray-500 hover:text-black">{text}</span>

        {children && (selected === text ? <ArrowUpIcon /> : <ArrowDownIcon />)}
      </div>
      {selected && children}
    </div>
  );
};
