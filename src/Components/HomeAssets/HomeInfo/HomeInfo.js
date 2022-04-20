import React from "react";

const HomeInfo = () => {
  return (
    <div className="bg-green-50 flex flex-col h-auto md:h-72 items-center justify-center">
      <h3 className="text-2xl md:text-4xl text-center pt-10 font-bold">
        The future of <span className="text-yellow-500">Fresh Produce</span> supply chain is FreshWay
      </h3>
      <button className="hover:opacity-90 text-base xl:text-base px-10  mt-4 xl:mt-8 f-f-r py-4  bg-green-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
        Join the Revolution
      </button>
    </div>
  );
};

export default HomeInfo;
