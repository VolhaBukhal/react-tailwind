import { navs } from "@/constants";
import { Button } from "../button";
import { NavItem } from "../nav-item";
import { NavMenu } from "../nav-menu";

type MobileMenuProps = {
  isOpen: boolean;
};

export const MobileMenu = ({ isOpen = false }: MobileMenuProps) => {
  return (
    <>
      <div
        className={`absolute top-0 left-0 right-0 bg-almost-black opacity-50 z-10 min-h-[150vh] ${
          isOpen ? "flex" : "hidden"
        }`}
      />
      <div
        className={`absolute right-0 top-0 w-1/2 bg-white z-20 justify-center min-h-[150vh] ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <nav className=" my-20 mx-5 space-y-5 text-lg w-full">
          {Object.keys(navs).map((label) => (
            <NavItem key={label} text={label}>
              {navs[label as keyof typeof navs] && (
                <NavMenu items={navs[label as keyof typeof navs]} isMobile />
              )}
            </NavItem>
          ))}
          <div>
            <Button text={"Login"} />
            <Button text={"Register"} hasBorder filled />
          </div>
        </nav>
      </div>
    </>
  );
};
