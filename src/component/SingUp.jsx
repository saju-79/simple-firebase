 
import { Link } from 'react-router';

const SingUp = () => {
    return (
       
     
    <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl text-center justify-center items-center my-20">
             <h1 className="text-5xl font-bold">Sign Up now!</h1>
        <div className="card-body">
        <form className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
         <p>Now to place this websaid <Link className='text-blue-700 ' to="/login"> Login</Link></p>
      </div>
    </div>
   
    );
};

export default SingUp;