
// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClhEkXcLseDqGg6xyF3BsbRv3J6R81BRE",
  authDomain: "phone-project-452fc.firebaseapp.com",
  projectId: "phone-project-452fc",
  storageBucket: "phone-project-452fc.firebasestorage.app",
  messagingSenderId: "208187650842",
  appId: "1:208187650842:web:869c60c404145d8a3e72a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);
