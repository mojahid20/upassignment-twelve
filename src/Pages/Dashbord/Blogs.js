import React from "react";

const Blogs = () => {
  return (
    <div className=" flex max-auto flex-wrap justify-center m-5  ">
      <div class="card w-96 bg-neutral text-neutral-content mr-3">
        <div class="card-body items-center text-center">
          <h2 class="card-title">improve the performance of a React</h2>
          <small>Keeping component state local where necessary.</small>
          <small>
            Memoizing React components to prevent unnecessary re-renders.
          </small>
          <small>Code-splitting in React using dynamic import()</small>
          <small>
            Windowing or list virtualization in React. Lazy loading images in
            React.
          </small>
        </div>
      </div>
      <div class="card w-96 bg-neutral text-neutral-content mr-3 my-4">
        <div class="card-body items-center text-center">
          <h2 class="card-title"> How dose Prototyping word</h2>
          <p>
            JavaScript is a prototype-based, Object Oriented <br /> programming
            language. After the ES6 updates, JavaScript
            <br /> allowed for “prototypal inheritance”, meaning that objects
            and methods can be shared, extended, and copied
          </p>
        </div>
      </div>
      <div class="card w-96 bg-neutral text-neutral-content">
        <div class="card-body items-center text-center">
          <h2 class="card-title">What is unit test?</h2>
          <p>
            Definition: This is a type of testing which is done by software
            developers in which the smallest testable module <br /> of an
            application - like functions, procedures or interfaces - are tested
            to ascertain if they are fit to use
          </p>
        </div>
      </div>
      <div className="flex max-auto flex-wrap justify-center m-5">
        <div class="card w-96 bg-neutral text-neutral-content mr-5 my-4">
          <div class="card-body items-center text-center">
            <h2 class="card-title">different ways to manage a state </h2>
            <p>
              There are four main types of state you need to properly manage in
              your React apps: Local state. Global state. Server state. URL
              state. Global state is data we manage across multiple components.
            </p>
          </div>
        </div>
        <div class="card w-96 bg-neutral text-neutral-content">
          <div class="card-body items-center text-center">
            <h2 class="card-title"> We implement a search to find products by name</h2>
            <p>
              let suppose there are 20 products and their values as a =12; b=10;
              c=10; d=8; e=9.5; f=9; g=8; h=11; etc.. now i want to print name
              of 9 items to be selected from twenty items whose all items total
              value sum is less than equals to 100. i have used simple code of
              getting combination of all number whose exact sum equal to 50.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
