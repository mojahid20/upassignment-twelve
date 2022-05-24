import React from "react";

const Review = ({ review }) => {
  return (
    <div id="review" class="card lg-max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
       
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt dolorem magnam, recusandae nostrum necessitatibus </p>
        <div class="flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-4">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div>
              <h4>{review.name}</h4>
              <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
