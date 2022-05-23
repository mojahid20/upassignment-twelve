import React from 'react';
import banner3 from '../../Assete/tools/banner-3.jpg'

const Contact = () => {
    return (
        <div className='my-10' style={{
            background:`url(${banner3})`,
            backgroundSize:'cover',
            height:'600px'
        }}>
        <div  className='w-80 mt-24 mx-auto '>
            <div className='pt-5'>
            <h4 className='text-xl font-bold text-light text-center text-white '>Contact Us</h4>
            <h1 className='text-3xl mb-4 text-center'>Sty Connected  With Us</h1>
            </div>
            <div className="form-control outline-none ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" required/>
          <label className="label">
          <span className="label-text">Massage</span></label>
         <textarea  name="massage" id="name" cols="20" rows="10" required placeholder='enter your text'
         className="input input-bordered resize-none"></textarea>
          <button className="btn btn-outline btn-danger mt-3">More info</button>
        </div>
        <div className="form-control mt-6"></div>
        </div>
        </div>
    );
};

export default Contact;