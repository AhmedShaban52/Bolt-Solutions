import Link from "next/link";
import { cards } from "../data/data";

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-28 pt-10 md:pt-20">
      <div className="w-11/12 mx-auto  lg:px-16  pb-12">
        <div className="text-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-2.5">
            Our <span className="text-blue-700">Projects</span>
          </h1>
          <div className="mx-auto w-44 md:w-80 h-1 bg-gradient-to-r from-blue-700 to-transparent mb-2"></div>
          <p className="text-lg text-gray-400">
            Real results. Real impact. A glimpse into our development journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-8  pt-12 w-full lg:w-[80%] md:mx-auto">
          {cards.map((card, index) => (
            <Link
              href={card.hreaf}
              key={index}
              className="flex flex-col items-center text-center p-6 border border-gray-700 rounded-xl shadow-sm transition-all duration-700 ease-in-out hover:shadow-lg hover:border-blue-500 hover:-translate-y-1 cursor-pointer"
            >
              {card.icon}
              <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-500">{card.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
