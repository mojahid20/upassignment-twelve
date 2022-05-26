import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';

const Orders = () => {
    const [orders,setOrders]=useState([])
    useEffect(()=>{
        const getOrders= async()=>{
            const url=`http://localhost:5000/order`

        }
        
    },[])
    return (
        <div>
            <h2>your order</h2>
        </div>
    );
};

export default Orders;