/// <reference types="vite-plugin-svgr/client" />
import LogoIcon from "@/assets/images/logo.svg?react";
import MenuIcon from "@/assets/images/icon-menu.svg?react";
import CloseMenuIcon from "@/assets/images/icon-close-menu.svg?react";

import { Button } from "../button";
import { NavItem } from "../nav-item";
import { NavMenu } from "../nav-menu";
import { useState } from "react";
import { navs } from "@/constants";
import { MobileMenu } from "../mobile-menu";

export const Header = () => {
  const [isShown, setIsShown] = useState(false);
  console.log("isShown", isShown);

  return (
    <header className="flex justify-between items-center">
      <LogoIcon />
      <nav className=" hidden xl:flex space-x-4 ml-4 items-center">
        {Object.keys(navs).map((label) => (
          <NavItem key={label} text={label}>
            {navs[label as keyof typeof navs] && (
              <NavMenu items={navs[label as keyof typeof navs]} />
            )}
          </NavItem>
        ))}
      </nav>
      <div className="hidden xl:flex ">
        <Button text={"Login"} />
        <Button text={"Register"} hasBorder filled />
      </div>
      <div
        className="flex ml-auto cursor-pointer z-30 xl:hidden"
        onClick={() => setIsShown((prev) => !prev)}
      >
        {isShown ? <CloseMenuIcon /> : <MenuIcon />}
      </div>
      {isShown && <MobileMenu isOpen={isShown} />}
    </header>
  );
};
