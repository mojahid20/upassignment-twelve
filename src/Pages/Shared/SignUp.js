import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate=useNavigate()
    const namelRef = useRef("");
    const emailRef = useRef("");
  const PasswordRef = useRef("");


  const handallogin= ()=>{
    navigate('/login')
}
    return (
        <div class="card w-96 bg-neutral text-neutral-content">
      <div class="card-body items-center text-center">
         <h1 className="text-3xl my-3">Plese Sign Up</h1>
       
       <form >
       <input ref={namelRef} type="email" placeholder="email" required className="py-2 border my-2" />
       

         <input ref={emailRef} type="email" placeholder="email" required className="py-2 border my-2" />
         <br />
         <input ref={PasswordRef} type="password" placeholder="password" required className="py-2 border my-2" />
         <br />
         
       <button  className="btn btn-primary">Sign Up</button>

       </form>
       <p className="mt-3 text-center">All ready have an Account? <Link to='/login' onClick={handallogin} className="text-danger mt-3 text-decoration-none">Plese Login</Link> </p>
       
        <div class="divider">OR</div>
        <div class="card-actions justify-end">
          
        </div>
      </div>
    </div>
    );
};

export default SignUp;