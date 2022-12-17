import React from "react";

const data = [
  {
    id: "feedback-item--1",
    author: "Anisha Li",
    img: "/assets/avatar-anisha.png",
    description:
      "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.” ",
  },
  {
    id: "feedback-item--2",
    author: "Ali Bravo",
    img: "/assets/avatar-ali.png",
    description:
      "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
  },
  {
    id: "feedback-item--3",
    author: "Richard Watts",
    img: "/assets/avatar-richard.png",
    description:
      "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!” ",
  },
  {
    id: "feedback-item--4",
    author: "Shanai Gough",
    img: "/assets/avatar-shanai.png",
    description:
      "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
  },
];

const CardsList: React.FC = () => {
  return (
    <div className="flex flex-col flex-wrap items-center gap-20 mt-16 px-3 tablet:px-8 tablet-lg:px-16 tablet:flex-row desktop:gap-12">
      {data.map((item, i) => (
        <div
          className="group/card flex-1 min-h-[290px] min-w-[250px] hover:-mt-6 transition-all duration-200 hover:shadow-xl flex flex-col items-center bg-app-light-gray rounded-2xl shadow-md px-6 pb-6 cursor-pointer"
          key={`feedbCK--${i}`}
        >
          <figure className="relative w-[80px] h-[80px] aspect-square -translate-y-1/2 shadow-md rounded-full ">
            <div className="w-full h-full rounded-full  border-4 border-b-app-light-gray border-l-app-light-gray -rotate-45 group-hover/card:border-l-app-red group-hover/card:border-b-app-red group-hover/card:border-t-app-blue group-hover/card:border-r-app-blue group-hover/card:rotate-[135deg] transition-all duration-500"></div>
            <img
              className="absolute top-0 left-0 -z-10 w-full object-fit object-center group-hover/card:scale-[0.85] transition-all duration-200"
              src={item.img}
              alt={item.author}
            />
          </figure>
          <span className="-mt-6 font-bold">{item.author}</span>
          <blockquote className="mt-4 text-app-grayish-blue">
            {item.description}
          </blockquote>
        </div>
      ))}
    </div>
  );
};

export default CardsList;
