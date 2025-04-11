type NavMenuProps = {
  items: string[] | null;
  isMobile?: boolean;
};
export const NavMenu = ({ items, isMobile = false }: NavMenuProps) => {
  return (
    <div
      className={`${
        !isMobile && "absolute"
      } top-5 right-0 rounded-sm p-2 bg-gray-100 mt-2`}
    >
      {items?.map((el, index) => (
        <div
          key={index}
          className="text-gray-500 hover:text-black cursor-pointer"
        >
          {el}
        </div>
      ))}
    </div>
  );
};
