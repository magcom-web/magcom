import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const cards = [
    {
      label: "Articles",
      path: "/articles",
      image:"/Group 44.svg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur adipisci animi similique quaerat necessitatibus fuga",
    },
    {
      label: "SGB Records",
      path: "/sgb-records",
      image:"/Group 46.svg",
      description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur adipisci animi similique quaerat necessitatibus fuga",
    },
    {
      label: "Archives",
      path: "/previous-editions",
      image:"/archiveicon.svg",
      description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur adipisci animi similique quaerat necessitatibus fuga",
    },
    {
      label: "Gallery",
      path: "event-gallery",
      image:"/Group 40.svg",
      description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur adipisci animi similique quaerat necessitatibus fuga",
    },
    {
      label: "Yearbook",
      path: "/Yearbook",
      image:"/yearbook2.svg",
      description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur adipisci animi similique quaerat necessitatibus fuga",
    },
    {
      label: "Team",
      path: "/team",
      image:"/Group 40.svg",
      description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur adipisci animi similique quaerat necessitatibus fuga",
    },
  ];

  return (
    <div className="min-h-screen text-black font-serif px-4 md:px-16 py-8">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight leading-tight">
          Welcome to MAGCOM
        </h1>
        <p className="text-gray-600 max-w-4xl mx-auto text-lg md:text-2xl italic">
          Explore the voices of NITC through articles, archives, and memories that define our campus life.
        </p>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {cards.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            // style={{
            //   backgroundImage: "url('/Ppaer texture 5.svg')",
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            // }}
            className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-md hover:shadow-xl hover:border-gray-400 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center"
          >
            <img
                src={item.image}
                alt={item.label}
                className="w-20 h-20 object-contain mb-4 group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            <h3 className="text-xl md:text-2xl font-bold uppercase text-gray-800 tracking-wide mb-3">
              {item.label}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{item.description}</p>
            <span className="text-gray-400 font-semibold text-sm hover:underline">
            Explore →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;