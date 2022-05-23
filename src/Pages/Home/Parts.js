import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts]=useState([]);
    useEffect(()=>{
        fetch('Service.json')
        .then(res=> res.json())
        .then(data=> setParts(data));
    },[])
    return (
        <div>
            <h2 className='text-center my-5 text-5xl'>Power Parts </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
            {
                parts.map(p => <Part
                key={p.id}
                p={p}
                ></Part>)
            }
            </div>
        </div>
        
    );
};

export default Parts;