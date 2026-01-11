import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../component/Home";
import Login from "../component/Login";
import SingUp from "../component/SingUp";
import Root from "../Root/Root";
 
 



 export const router = createBrowserRouter([
    {
        path:'/',
        Component:Root ,
        children:[
            {
                path:'/',
                Component:Home
            },
            {
              path:'/login' , Component: Login },
            {path:'/signup' , Component: SingUp}
        ]
    }
])