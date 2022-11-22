import React from "react";
import { Logo, Button } from "../Layouts";
import Socials from "./Socials";
import NavList from "./NavList";

const Footer: React.FC = () => {
  return (
    <footer className="bg-app-blue flex flex-col gap-y-8 p-16 text-app-light-gray">
      <div className="flex flex-col gap-y-6 items-center justify-between tablet-lg:flex-row tablet-lg:items-start tablet-lg:gap-y-0">
        <div className="flex flex-col justify-between order-3 gap-y-4 tablet-lg:order-1">
          <Logo className="fill-app-light-gray" />
          <Socials />
        </div>
        <nav className="flex gap-24 capitalize order-2">
          <NavList list={["home", "pricing", "products", "about us"]} />
          <NavList list={["careers", "community", "privacy policy"]} />
        </nav>
        <div className="flex flex-col items-end justify-between gap-2 order-1 tablet-lg:order-3">
          <div className="flex gap-x-3 items-center">
            <input
              type="email"
              placeholder="email"
              className="p-3 rounded-3xl outline-none text-app-blue"
            />
            <Button value="go" />
          </div>
        </div>
      </div>
      <span className="text-sm capitalize self-center text-center tablet-lg:self-end tablet-lg:text-start">
        &copy; copyright 2020. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
