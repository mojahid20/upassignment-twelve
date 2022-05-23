import React from 'react';

const Part = ({p}) => {
    return (
        <div class="card w-96 h-auto text-primary-content shadow-lg">
        <div class="card-body">
         <img  src={p.img} alt="" />
          <h3 class="card-title"> Name: {p.name}</h3>
          <h4>quantity {p.quantity}</h4>
          <h4>price {p.price}</h4>
          
          <h5>description <p>{p.description}</p> </h5>
          <button class="btn btn-outline btn-primary bottom-0 block">Book Now</button>
        </div>
      </div>
    );
};

export default Part;