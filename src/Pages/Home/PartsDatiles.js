import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PartsDatiles = () => {
    const {partsId}=useParams()
    return (
        <div>
            <h2>welcome to datiles {partsId}</h2>
            <div className='text-center'>
                <Link to='/checkout'> <button className='btn btn-primary'>Check Now</button> </Link> 
            </div>
        </div>
    );
};

export default PartsDatiles;