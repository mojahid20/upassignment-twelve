import React from "react";

const Review = ({ review }) => {
  return (
    <div  class="card lg-max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
       
        <p>{review.description}</p>
        <div class="flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-4">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div>
              <h1 className="text-xl">{review.name}</h1>
              <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
