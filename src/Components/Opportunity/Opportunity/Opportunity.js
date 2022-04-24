import React from 'react';

const Opportunity = ({op}) => {
    console.log(op);
    return (
        <div className='border bg-green-100 p-2 rounded'>
            <img src={op.img} alt={op.name} />
            <h2 className='font-bold text-2xl mt-1 '>{op.name}</h2>
            
        </div>
    );
};

export default Opportunity;