import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate=useNavigate()
    const namelRef = useRef("");
    const emailRef = useRef("");
  const PasswordRef = useRef("");
  const handalsignup= event =>{
    event.preventDefault();
   const name= namelRef.current.value;
   const email= emailRef.current.value;
   const password= PasswordRef.current.value;

    createUserWithEmailAndPassword(email,password)
}
 

  const handallogin= ()=>{
    navigate('/login')
}
if(user){
    navigate('/');
}

    return (
      <div className='flex justify-center items-center mt-10'>
        <div class="card w-96 bg-neutral text-neutral-content ">
      <div class="card-body items-center text-center">
         <h1 className="text-3xl my-3">Plese Sign Up</h1>
       
       <form onSubmit={handalsignup}>
       <input ref={namelRef} type="name" placeholder="name" required className="p-2 border my-2" />
       

         <input ref={emailRef} type="email" placeholder="email" required className="p-2 border my-2" />
         <br />
         <input ref={PasswordRef} type="password" placeholder="password" required className="py-2 border p-2 mb-3" />
         <br />
         
       <button  className="btn btn-primary">Sign Up</button>

       </form>
       <p className="mt-3 text-center">All ready have an Account ? <Link to='/login' onClick={handallogin} className="text-danger mt-3 text-decoration-none">Plese Login</Link> </p>
       
        
        <div class="card-actions justify-end">
          
        </div>
      </div>
    </div>
    </div>
    );
};

export default SignUp;