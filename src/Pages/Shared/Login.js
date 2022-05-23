import React, { useRef } from "react";
import auth from "../../firebase.init";

import {  useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
   // for google sign in
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate=useNavigate()
  const handalSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
   signInWithEmailAndPassword(email,password)
  };

  if( guser || user){
    navigate('/')
  }
  if (gloading || loading) {
    return <p>loading...</p>;
  }
  if (gerror || error) return <p>Error:{gerror.message}</p>;

  const handalsignup=() =>{
    navigate('/signup');
  }
 
 
  
  
  

  return (
    <div class="card w-96 bg-neutral text-neutral-content">
      <div class="card-body items-center text-center">
         <h1 className="text-3xl my-3">Plese Login</h1>
       
       <form onSubmitCapture={handalSubmit}>
         <input ref={emailRef} type="email" placeholder="email" required className="py-2 border my-2" />
         <br />
         <input ref={passwordRef} type="password" placeholder="password" required className="py-2 border my-2" />
         <br />
         
       <button  className="btn btn-primary">login</button>

       </form>
       <p className="mt-3">are you New? <Link to='/SignUp' onClick={handalsignup} className="text-danger mt-3 text-decoration-none">Plese Sign Up</Link> </p>
       
        <div class="divider">OR</div>
        <div class="card-actions justify-end">
          <button onClick={() => signInWithGoogle()} class="btn btn-primary">
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
