import React from 'react';
import tool from '../../Assete/Image/tool.jpg'
const Banner = () => {
    return (
        <div class="hero min-h-screen class=1000&h=800);">
            <img src={tool} className='w=260&h=400' alt="" />
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold"> Best Power Tool</h1>
      <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;