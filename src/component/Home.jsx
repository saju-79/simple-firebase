import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../fireabse/_firebase';
 

const Home = () => {
    const [user ,  setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const handelfirebase =()=>{
        signInWithPopup(auth ,provider)
        .then(res =>{
            setUser(res.user)
            console.log(res.user)
        }).catch(err =>{
            console.log(err)
        })
    }
    const handelSingUot = ()=>{
        signOut(auth).then(()=>{
            setUser(null)
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div className='  space-y-4 '>
            <h1 className='b text-center items-center justify-center text-amber-300 text-2xl font-bold'>click sign in button  </h1>
            {user && <div className="card bg-base-100 w-1/2 mx-auto shadow-sm">
  <figure>
    <img
className=' w-full h-80 object-cover'
      src={user.photoURL}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"> Your Name : {user.displayName}</h2>
    <p> Your Email : {user.email}</p>
    <p> {user.emailVerified ? "Your Email Verified " : "Your Email Not Verified"}</p>

    <div className="card-actions justify-end">
      <button onClick={handelSingUot} className=' btn btn-primary'>Sign Out</button>
    </div>
  </div>
</div>}
           <div className=" text-center items-center justify-center"><button  className='btn btn-primary text-black font-bold px-4 py-2 bg-red-600 rounded-2xl ' onClick={handelfirebase}>SignIn</button></div>
        </div>
    );
};

export default Home;