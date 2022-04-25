import React, { useEffect, useState } from "react";
import Opportunity from "../Opportunity/Opportunity";

const Opportunities = () => {
  const [oppo, setOppo] = useState([]);

  useEffect(() => {
    fetch("opportunities.json")
      .then((res) => res.json())
      .then((data) => setOppo(data));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 w-10/12 mx-auto mt-10">
      {oppo.map((op) => (
        <Opportunity key={op.id} op={op}></Opportunity>
      ))}
    </div>
  );
};

export default Opportunities;
