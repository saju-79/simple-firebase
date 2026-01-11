import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../component/Home";
import Login from "../component/Login";
import SingUp from "../component/SingUp";
import Root from "../Root/Root";
import PrivateRouter from "../private/PrivateRouter";
import Profile from "../component/Profile";
import Orders from "../component/Orders";
import Desord from "../component/Desord";
 
 



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
            {path:'/signup' , Component: SingUp},
            {path:'/profile' ,  element:<PrivateRouter> <Profile></Profile></PrivateRouter>},
            {path:'/orders' , element: <PrivateRouter><Orders></Orders></PrivateRouter>},
            {path:'/desbord' , element: <PrivateRouter><Desord></Desord></PrivateRouter>}
        ]
    }
])