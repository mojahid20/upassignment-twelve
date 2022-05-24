import React from "react";

const Blogs = () => {
  return (
    <div className=" flex max-auto flex-wrap justify-center m-5  ">
      <div class="card w-96 bg-neutral text-neutral-content mr-3">
        <div class="card-body items-center text-center">
          <h2 class="card-title">improve the performance of a React</h2>
          <small>Keeping component state local where necessary.</small>
          <small>Memoizing React components to prevent unnecessary re-renders.</small>
          <small>Code-splitting in React using dynamic import()</small>
          <small>Windowing or list virtualization in React. Lazy loading images in React.</small>
        </div>
      </div>
      <div class="card w-96 bg-neutral text-neutral-content mr-3 my-4">
        <div class="card-body items-center text-center">
          <h2 class="card-title"> How dose Prototyping word</h2>
          <p>JavaScript is a prototype-based, Object Oriented <br /> programming language. After the ES6 updates, JavaScript
              <br /> allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied</p>
        </div>
      </div>
      <div class="card w-96 bg-neutral text-neutral-content">
        <div class="card-body items-center text-center">
          <h2 class="card-title">What is unit test?</h2>
          <p>Definition: This is a type of testing which is done by software developers in which the smallest testable module <br /> of an application - like functions, procedures or interfaces - are tested to ascertain if they are fit to use</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
