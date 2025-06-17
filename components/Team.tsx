import React from "react";
import { BsPersonWorkspace } from "react-icons/bs";

const Team = () => {
  const teamMembers = [
    {
      experince: "April 2024 - Present",
      icon: <BsPersonWorkspace />,
      name: "Ahmed Hussein",
      title: "Laravel FullStack Developer",
      company: "Exabyte LLC",
    },
    {
      experince: "April 2024 - Present",
      icon: <BsPersonWorkspace />,
      name: "Seif Amr",
      title: "Frontend Developer",
      company: "Exabyte LLC",
    },
    {
      experince: "April 2024 - Present",
      icon: <BsPersonWorkspace />,
      name: "Ahmed Shaaban",
      title: ".NET FullStack Developer",
      company: "Exabyte LLC",
    },
    {
      experince: "April 2024 - Present",
      icon: <BsPersonWorkspace />,
      name: "Yousef Mahmoud",
      title: "Mobile Developer",
      company: "Exabyte LLC",
    },
    {
      experince: "April 2024 - Present",
      icon: <BsPersonWorkspace />,
      name: "Karrem Alaa",
      title: "Mobile Developer",
      company: "Exabyte LLC",
    },
  ];

  return (
    <section>
      <div className="text-center">
        <h1 className="text-white text-xl sm:text-3xl md:text-5xl font-bold mb-2.5">
          Team <span className="text-blue-700">Members</span>
        </h1>
        <div className="mx-auto w-80 h-1 bg-gradient-to-r from-blue-700 to-transparent mb-2"></div>
        <p className="text-xl text-gray-400">
           Group of Engineers, Developers, And Designers Dedicated to Delivering Excellence.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10">
        {teamMembers.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-[#0D141D] shadow-lg border border-gray-700  rounded-3xl  space-y-4 transition hover:shadow-xl"
          >
            <p className="text-center text-blue-700 font-medium text-sm">
              {item.experince}
            </p>

            <div className="flex items-start gap-4">
              <span className="text-blue-700 text-2xl mt-1">{item.icon}</span>

              <div>
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </h1>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
