import React, { useEffect, useState } from 'react';
import Opportunity from '../Opportunity/Opportunity';

const Opportunities = () => {
    const [oppo, setOppo] = useState([]);

    useEffect(()=>{
        fetch('opportunities.json')
        .then(res=> res.json())
        .then(data => setOppo(data))
    },[])

    return (
        <div>
            {
                oppo.map(op=>(<Opportunity></Opportunity>))
            }
        </div>
    );
};

export default Opportunities;