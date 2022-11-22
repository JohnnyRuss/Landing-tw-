import React from "react";

interface NavListType {
  isOpen: boolean;
  handleNav: () => void;
}

const NavList: React.FC<NavListType> = ({ isOpen, handleNav }) => {
  return (
    <div
      className={`${
        isOpen
          ? "fixed z-10 h-screen w-full top-0 left-0 bg-pattern-gradient animate-collapse-down"
          : ""
      }  tablet:bg-none tablet:relative tablet:h-auto tablet:w-auto`}
    >
      <ul
        className={`${
          isOpen
            ? "fixed z-10 top-16 left-1/2 -translate-x-1/2 w-72 rounded-lg shadow-md py-4 bg-app-light-gray animate-move-top-fade"
            : "hidden"
        } opacity:0 flex flex-col items-center gap-4 capitalize text-app-blue font-medium tablet:opacity-100 tablet:flex tablet:flex-row tablet:relative tablet:z-0 tablet:top-0 tablet:left-0 tablet:translate-x-0 tablet:rounded-none tablet:shadow-none tablet:py-0 tablet:bg-transparent tablet:w-auto`}
      >
        {["pricing", "product", "about us", "careers", "community"].map(
          (item) => (
            <li
              onClick={handleNav}
              className="cursor-pointer hover:text-gray-500 transition-all"
              key={`nav-item--${item}`}
            >
              {item}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default NavList;
