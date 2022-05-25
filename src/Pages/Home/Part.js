import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({p}) => {
  const {_id, name,img,description,price,quantity}=p;
const navigate=useNavigate()

  const navigateTodatils= id=>{
    navigate(`/part/${id}`)
  }
    return (
        <div class="card w-96 h-auto text-primary-content shadow-lg">
        <div class="card-body">
         <img  src={img} alt="" />
          <h3 class="card-title"> Name: {name}</h3>
          <h4>quantity {quantity}</h4>
          <h4>price {price}</h4>
          
          <h5>description <p>{description}</p> </h5>
          <button onClick={()=> navigateTodatils(_id)} class="btn btn-outline btn-primary bottom-0 block">Book Now</button>
        </div>
      </div>
    );
};

export default Part;