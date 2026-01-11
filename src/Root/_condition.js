/**
 *  const handelLogin = (e) =>{
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
 */