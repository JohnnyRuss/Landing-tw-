import React from "react";

interface HeadingType {
  children?: React.ReactNode;
}

const Heading: React.FC<HeadingType> = ({ children }) => {
  return (
    <h3 className="text-app-h-2 text-center tablet:text-start tablet:text-app-heading text-app-blue font-bold">{children}</h3>
  );
};

export default Heading;
