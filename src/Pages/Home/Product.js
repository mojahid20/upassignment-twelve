import React from 'react';

const Product = ({product}) => {
    return (
        <div class="card lg-max-w-lg bg-base-100 shadow-xl my-5">
      <div class="card-body">
      <div class="avatar">
  <div class="w-48 rounded">
    <img src={product.img} alt='' />
  </div>
</div>
          <div>
          <h3>{product.name}</h3>
          <p>{product.ratting}</p>
          <h4>{product.price}</h4>
          </div>

        
      </div>
    </div>
    );
};

export default Product;