import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../../pages/Home/Home";
import Assignment from "../../pages/assaignments/assignment/Assignment";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";


const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/assignments',
                element:<Assignment></Assignment>
            },
        ]
    }
])

export default router;