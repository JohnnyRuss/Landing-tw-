import React from "react";
import { Button } from "../Layouts";

const Simplify: React.FC = () => {
  return (
    <section className="flex flex-col gap-y-6 justify-between items-center bg-app-red py-8 px-16 mt-24 tablet:flex-row tablet:gap-y-0">
      <p className="text-app-light-gray text-center text-app-h-2 font-bold max-w-xs tablet:text-start">Simplify how your teams works today</p>
      <Button className="!bg-app-light-gray text-app-red" />
    </section>
  );
};

export default Simplify;
