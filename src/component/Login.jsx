import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router';
import { auth } from '../fireabse/_firebase';

const Login = () => {
  const [uerrorMassge , setUserErrorMassge] = useState("")
  const[sucsess , setSucssess] = useState(false)
    const handelLogin = (e) =>{
        e.preventDefault();
        setUserErrorMassge("")
        setSucssess(false)
        const email  = e.target.email.value;
        const password = e.target.password.value;
        
        const passwordVerify = /(?=.*\d)/ ;
        if(passwordVerify.test(password) === false){
          setUserErrorMassge("Password must contain at least one digit, one lowercase letter, one uppercase letter, and be at least 8 characters long.")
          return;
        }
      createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    setSucssess(!sucsess)
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
     setUserErrorMassge(errorMessage , errorCode);
    // ..
  });
    }
    return (
                              <div className="hero flex flex-col justify-center items-center text-center bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
     
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
             <h1 className="text-5xl font-bold">Login now!</h1>
        <form onSubmit={handelLogin} className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
        </form>

        {uerrorMassge && <p className=' text-red-500'>{uerrorMassge}</p>}
        {sucsess && <p className='text-green-600'>Login successful!</p>}
        <p>Now to place this websaid <Link className='text-blue-700 ' to="/signup">Register</Link></p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;