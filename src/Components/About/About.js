import React from "react";
import Footer from "../Foooter/Footer";
import Hero from "../Hero/Hero";
import Partner from "./Partner";
import Team from "./Team";
import Users from "./Users";

const About = () => {
  return (
    <div>
      <Hero></Hero>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="lg:w-10/12 w-full">
          <p className="font-normal text-sm leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer">
            About
          </p>
          <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-3xl text-3xl lg:leading-10 leading-9 mt-2">
            Bangladesh 1ST Hi-Tech agricultural park
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            Agriculture is a predominant sector in Bangladesh in generating
            livelihood, employment, and GDP contribution. Although agriculture
            remains the third most contributing sector to the country’s GDP, its
            contribution has decreased over the past decade going from 17% In
            2010 to 12.6% in 2020. The industry is also a significant
            contributor to export earnings and provider of raw material sources
            for other sectors, such as poultry and livestock feed, leather,
            frozen food, canned food, etc. It is the core of the Bangladeshi
            economy, playing an essential role in reducing poverty and achieving
            food security in the past.
          </p>
        </div>

        <div className="lg:mt-14 sm:mt-10 mt-12">
          <img
            className="lg:block hidden w-full"
            src="https://i.ibb.co/GvwJnvn/Group-736.png"
            alt="Group of people Chilling"
          />
          <img
            className="lg:hidden sm:block hidden w-full"
            src="https://i.ibb.co/5sZTmHq/Rectangle-116.png"
            alt="Group of people Chilling"
          />
          <img
            className="sm:hidden block w-full"
            src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png"
            alt="Group of people Chilling"
          />
        </div>

        <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
          <div className="w-full xl:w-5/12 lg:w-6/12">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
              Our Aim
            </h2>
            <p className="font-normal text-base leading-6 text-gray-600 mt-4">
              To ensure a sustainable growth going forward, the industry needs
              to move towards high-tech farming and value chain development to
              reduce costs, increase production, and achieve better product
              quality.
            </p>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6">
              Post harvesting losses of annually stand at $2.38 bn per year (Tk
              30,000 crores) The Business Standard a loss that can be salvaged
              through agro-processing, packaging, storage and proper logistics.
            </p>
          </div>
          <div className="lg:flex items-center w-full lg:w-1/2 ">
            <img
              className="lg:block hidden w-full"
              src="https://i.ibb.co/2kxWpNm/Group-740.png"
              alt="people discussing on board"
            />
            <img
              className="lg:hidden sm:block hidden w-full h-3/4"
              src="https://i.ibb.co/ZLgK3NQ/Group-788.png"
              alt="people discussing on board"
            />
            <img
              className="sm:hidden block w-full"
              src="https://i.ibb.co/9g2R7Xr/Group-803.png"
              alt="people discussing on board"
            />
          </div>
        </div>
      </div>
      <Users></Users>
      <Team></Team>
      <Partner></Partner>
      <Footer></Footer>
    </div>
  );
};

export default About;
