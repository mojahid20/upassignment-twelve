import React from "react";

const Summary = ({summary}) => {
  return (
    <div class="card lg-max-w-lg  my-5">
      <div class="card-body text-center">
      <div class="avatar">
  <div class="w-48 rounded">
    <img src={summary.img} alt='' />
  </div>
</div>
          <div>
          <h1 className="text-5xl">{summary.count}</h1>
          <p>{summary.hading}</p>
          
          </div>

        
      </div>
    </div>
  );
};

export default Summary;
