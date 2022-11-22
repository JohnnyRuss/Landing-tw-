import React from "react";
import { Heading, Button } from "../Layouts";
import CardsList from "./CardsList";

const FeedBacks: React.FC = () => {
  return (
    <section className="mt-16 flex flex-col items-center gap-5">
      <Heading>What they’ve said</Heading>
      <CardsList />
      <Button className="mt-5" />
    </section>
  );
};

export default FeedBacks;
