import React from "react";

interface NavListType {
  list: string[];
}

const NavList: React.FC<NavListType> = ({ list }) => {
  return (
    <ul className="flex flex-col gap-1">
      {list.map((item) => (
        <li className="cursor-pointer transition-all hover:text-app-red" key={`footer-nav--1__${item}`}>{item}</li>
      ))}
    </ul>
  );
};

export default NavList;
