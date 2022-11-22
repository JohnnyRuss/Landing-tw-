import React from "react";

const list = [
  {
    id: "manage-item--1",
    title: "Track company-wide progress",
    description:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    id: "manage-item--2",
    title: "Advanced built-in reports",
    description:
      "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    id: "manage-item--3",
    title: "Everything you need in one place",
    description:
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];

const ManageDetails: React.FC = () => {
  return (
    <article className="flex-1 max-w-full flex flex-col gap-8 px-3 mt-6 tablet:mt-0 tablet:max-w-1/2">
      {list.map((item, i) => (
        <div
          className="grid grid-cols-[45px,_1fr] gap-x-4 gap-y-2"
          key={item.id}
        >
          <div className="col-span-2 flex items-center gap-x-2 rounded-l-3xl w-11/12 ml-auto bg-app-grayish-blue tablet:bg-transparent tablet:w-full">
            <span className="bg-app-red text-app-light-gray rounded-3xl px-4 py-1">
              0{i + 1}
            </span>
            <p className="text-app-blue font-bold self-center">{item.title}</p>
          </div>
          <p className="col-span-2 text-app-grayish-blue tablet:max-w-75 tablet:col-span-1 tablet:col-start-2">
            {item.description}
          </p>
        </div>
      ))}
    </article>
  );
};

export default ManageDetails;
