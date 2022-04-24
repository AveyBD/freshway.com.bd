import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 container md:w-10/12 mx-auto">
      <div className="w-3/4 mx-auto">
        <h2 className="text-4xl font-bold">About Us</h2>
        <p className="text-gray-500 md:mt-4">
          Freshway is Bangladesh's largest Fresh Produce Supply Chain Company.
          We are pioneers in solving one of the toughest supply chain problems
          of the world by leveraging innovative technology. We source fresh
          produce from farmers and deliver them to businesses within 12 hours.
        </p>
        <button className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-green-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">
          Know More
        </button>
        <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-green-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">
          Know More
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default About;
