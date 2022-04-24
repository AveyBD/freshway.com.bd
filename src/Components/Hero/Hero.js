import React from "react";
import heroImg from '../../Assets/Images/hero.png'

const Hero = () => {
  return (
    <div>
      <div className="relative w-full h-full pb-10">
        <div className="relative px-4 xl:px-0 container mx-auto md:flex items-center gap-8">
          <div className="text-color w-full md:w-1/3 pt-16 lg:pt-32 xl:pt-12">
            <h1 className="text-4xl md:text-4xl lg:text-6xl w-11/12 lg:w-11/12 xl:w-full xl:text-6xl text-gray-900 font-extrabold f-f-l">
              Revolutionizing the Fresh Produce Supply Chain
            </h1>
            <div className="f-f-r text-base lg:text-base pb-20 sm:pb-0 pt-10 xl:pt-6">
              <h2>
              Driven by cutting edge technology, we source fresh produce from farmers and sell to businesses, across Bangladesh.
              </h2>
            </div>
            <div>
              <button className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-green-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
          <img
            className="w-full mt-2 md:mt-0 object-fill md:w-2/3 md:-ml-4 lg:-ml-4 xl:ml-0"
            src={heroImg}
            alt="sample page"
            role="img"
          />
          <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-green-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">
          Learn More
          </button>

        </div>
      </div>
    </div>
  );
};

export default Hero;
