import { FcInfo } from "react-icons/fc";
import React from "react";

const Opportunity = ({ op }) => {
  console.log(op.Benefits);
  return (
    <div className="border bg-green-100 hover:bg-green-400 hover:scale-110 duration-300 ease-linear p-2 rounded hover:drop-shadow-xl mb-10">
      <img src={op.img} alt={op.name} />
      <h2 className="font-bold text-2xl mt-1 ">{op.name}</h2>
      <ul>
        <li className="flex gap-1 items-center ">
          <FcInfo></FcInfo>
          {op.Benefits[0]}
        </li>
        <li className="flex gap-1 items-center ">
          <FcInfo></FcInfo>
          {op.Benefits[1]}
        </li>
        <li className="flex gap-1 items-center ">
          <FcInfo></FcInfo>
          {op.Benefits[2]}
        </li>
        <li className="flex gap-1 items-center ">
          <FcInfo></FcInfo>
          {op.Benefits[3]}
        </li>
      </ul>
    </div>
  );
};

export default Opportunity;
