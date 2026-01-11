import { createUserWithEmailAndPassword,   GoogleAuthProvider,   onAuthStateChanged,   signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../fireabse/_firebase";
import { useEffect, useState } from "react";

const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user , setUser ] =  useState(null)
    const [loding ,  setLoding] = useState(true)

    const createUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInLogin = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

     const googleSignIn = () => {
        setLoding(true)
        return signInWithPopup(auth, provider);
    }
   /*  onAuthStateChanged(auth , (currentUser) =>{
        if (currentUser) {
            console.log("current user", currentUser);
        }else{
            console.log('no user loged in ' ,  currentUser);
        }
    }) */
   useEffect(() =>{

     const unSubscribre = onAuthStateChanged(auth ,  (currentUser) =>{
        
        setUser(currentUser);
        setLoding(false);

     })
      return () => {
        unSubscribre();
        setLoding(true)
      }
   } ,[])

    const logOut = ()=>{
        signOut(auth);
        setLoding(true)
    }

  const userInfo = {
       loding,
        user ,
     createUser ,
     signInLogin ,
     logOut ,
     googleSignIn
  };

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;




