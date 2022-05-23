import React, { useRef } from "react";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
const Login = () => {
  // for emai and pass
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const emaiRef = useRef("");
  const passwordRef = useRef("");

  // for google sign in
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

  return (
    <div class="card w-96 bg-neutral text-neutral-content">
      <div class="card-body items-center text-center">
         <h1 className="text-3xl my-3">Plese Login</h1>
        <div class="form-control w-full max-w-xs">
          
          <input
            type="email"
            placeholder="email"
            class="input input-bordered w-full max-w-xs"required
          />
          
        </div>
        <div class="form-control w-full max-w-xs">
          
          <input
            type="password"
            placeholder="password"
            class="input input-bordered w-full max-w-xs"required
          />
          
        </div>

       <button class="btn btn-primary">Login</button>
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
