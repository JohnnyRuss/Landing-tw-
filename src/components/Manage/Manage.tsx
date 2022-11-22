import React from "react";
import { Heading } from "../Layouts";

import ManageDetails from "./ManageDetails";

const Manage: React.FC = () => {
  return (
    <section className="flex flex-col mt-14 tablet:flex-row">
      <article className="flex-1 max-w-full flex flex-col justify-start gap-6 px-3 tablet:px-8 tablet:max-w-1/2 tablet:items-start tablet-lg:px-16">
        <Heading>What’s different about Manage?</Heading>
        <p className="text-center tablet:text-start">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </article>
      <ManageDetails />
    </section>
  );
};

export default Manage;
