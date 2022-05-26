import React from "react";

const Myportfolio = () => {
  return (
    // <div className='text-center mt-10'>
    //     <h1 className='text-2xl' >This is my protfolio</h1>
    // </div>
    <div className="flex justify-center items-center">
      <div class="card w-96 bg-neutral text-neutral-content text-center mt-10">
        <div class="card-body items-center text-center">
          <h1 className="text-3xl">This is my protfolio</h1>
          <h2>Name : MD. Mozahidul Islam</h2>
          <h2>Email : <a href="#">mojahid319@gmail.com</a></h2>
          <p>H,S,C Pused from madrasha Bord</p>
          <p>I know Computer sinc 2010, but recently i getherd HTML,CSS, JS,
              and i have leared Ract js in this course .
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Myportfolio;
