import React, { useState, useEffect } from "react";
import { Logo, Button } from "../Layouts";
import Burger from "./Burger";
import NavList from "./NavList";

import useRestrictBodyFlow from "../../hooks/useRestrictBodyFlow";
import useWindowDimention from "../../hooks/useWindowDimention";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { width } = useWindowDimention();
  const { restrict } = useRestrictBodyFlow();

  useEffect(() => {
    if (width > 680 && isOpen) {
      setIsOpen(false);
      restrict(false);
    }
  }, [width]);

  useEffect(() => {
    restrict(isOpen);
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-30 bg-white max-w-[1280px] mx-auto flex items-center justify-between py-6 px-3 desktop:px-0">
      <Logo />
      <NavList isOpen={isOpen} handleNav={() => setIsOpen(false)} />
      <Button className="hidden tablet:block" />
      <Burger isOpen={isOpen} handleNav={() => setIsOpen((prev) => !prev)} />
    </nav>
  );
};

export default Navigation;
