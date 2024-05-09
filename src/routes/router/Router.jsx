import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../../pages/Home/Home";
import Assignment from "../../pages/assaignments/assignment/Assignment";


const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
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