import React, { use } from 'react';
import { AuthContext } from '../contextAPI/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({children}) => {
    const location = useLocation();
    const{user ,  loding} = use(AuthContext)
    if (loding) {
        return<>
                 <div className="flex justify-center items-center  my-20">
                 
                     <span className="loading loading-spinner text-primary"></span>
<span className="loading loading-spinner text-secondary"></span>
<span className="loading loading-spinner text-accent"></span>
<span className="loading loading-spinner text-neutral"></span>
<span className="loading loading-spinner text-info"></span>
<span className="loading loading-spinner text-success"></span>
<span className="loading loading-spinner text-warning"></span>
<span className="loading loading-spinner text-error"></span>

                 </div>
             </>
        
    }
    if(!user){
        return <Navigate state={location.pathname} to="/login"></Navigate> 
    }
    return  children;
        
    
};

export default PrivateRouter;