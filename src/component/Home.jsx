 import React from 'react';
import Login from './Login';
import SingUp from './SingUp';
 
 const Home = () => {
    return (
        <div className="hover-3d my-10 max-w-lg mx-auto flex justify-center items-center text-center ">
  {/* content */}
  <figure className="max-w-100 mx-auto rounded-2xl">
    <img src="https://img.daisyui.com/images/stock/creditcard.webp" alt="3D card" />
  </figure>
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
    );
 };
 
 export default Home;