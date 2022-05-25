import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

const PartsDatiles = () => {
  const { partsId } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/service/${partsId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <Link to="/checkout">
          {" "}
          <button className="btn btn-primary">Check Now</button>{" "}
        </Link>
      </div>
      <div className="flex max-auto flex-wrap justify-center mt-10">
      <div class="card w-96 bg-neutral text-neutral-content mr-3">
        <div class="card-body items-center text-center">
        <img src={service.img} alt="" />
            <h2>Name: {service.name}</h2>
            <p>Quantity:{service.quantity}</p>
            <p>Price:{service.price}</p>
        </div>
      </div>
      </div>
      {/* <div className='text-center mt-8'>
                <img src={service.img} alt="" />
            <h2>Name: {service.name}</h2>
            <p>Quantity:{service.quantity}</p>
            <p>Price:{service.price}</p>
            </div> */}
    </div>
  );
};

export default PartsDatiles;
