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
    <div>
      {oppo.map((op) => (
        <Opportunity key={op.id} op={oppo}></Opportunity>
      ))}
    </div>
  );
};

export default Opportunities;
