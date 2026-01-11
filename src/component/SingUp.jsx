 
import { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../contextAPI/AuthContext';
 


const SingUp = () => {
     const userIfo = use(AuthContext);
       const {createUser} = userIfo;
       
         const handelSingUp = (e)=>{
          e.preventDefault();
          const name = e.target.name.value;
          const email = e.target.email.value;
          const password = e.target.password.value;
          console.log(name, email, password);
          createUser(email , password)
          .then((result) =>{
            console.log(result.user)
          })
          .catch(error =>{
            console.log(error)
          })
          
         }
    return (
       
     
    <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl text-center justify-center items-center my-20">
             <h1 className="text-5xl font-bold">Sign Up now!</h1>
        <div className="card-body">
        <form onSubmit={handelSingUp} className="fieldset">
          <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
           <button  className="btn btn-neutral mt-4">Sign Up</button>
        </form>
         <p>Now to place this websaid <Link className='text-blue-700 ' to="/login"> Login</Link></p>
      </div>
    </div>
   
    );
};

export default SingUp;