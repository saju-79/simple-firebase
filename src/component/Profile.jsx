import React, { use } from 'react';
import { AuthContext } from '../contextAPI/AuthContext';

const Profile = () => {
    const {user} =  use(AuthContext)
    return (
      <div className="hero bg-base-200  my-6">
  <div className="hero-content flex-col lg:flex-row">
    <img
    
      src={user.photoURL}
      className="w-full object-cover rounded-lg shadow-2xl "
    />
    <div>
      <h1 className="text-5xl font-bold">{user.displayName}</h1>
      <p className="py-6">
         {user.email}
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Profile;