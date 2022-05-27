import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const url = `https://secure-anchorage-02731.herokuapp.com/order`;
    };
  }, []);
  return (
    <div>
      <h2>your order</h2>
    </div>
  );
};

export default Orders;
