import React from "react";
import { Button, Heading } from "../Layouts";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col gap-2 mt-5 tablet:mt-14 tablet:flex-row">
      <article className="order-2 tablet:order-1 flex-1 max-w-full flex flex-col items-center justify-center gap-6 px-3 tablet:px-8 tablet:max-w-1/2 tablet-lg:px-16">
        <Heading>Bring everyone together to build better products.</Heading>
        <p className="text-app-grayish-blue text-center tablet:text-start">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button className="tablet:self-start" />
      </article>
      <figure className="order-1 tablet:order-2 flex-1 max-w-full tablet:max-w-1/2">
        <img
          className="w-full object-cover object-center"
          src="/assets/illustration-intro.svg"
          alt="fig"
        />
      </figure>
    </section>
  );
};

export default Hero;
