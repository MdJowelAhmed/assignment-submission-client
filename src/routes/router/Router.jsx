import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../../pages/Home/Home";
import Assignment from "../../pages/assaignments/assignment/Assignment";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import CreateAssignments from "../../pages/assaignments/CreateAssignments/CreateAssignments";
import PendingAssignments from "../../pages/assaignments/pendingAssignments/PendingAssignments";
import Login from "../../pages/Authentication/Login";
import Register from "../../pages/Authentication/Register";


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
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/assignments',
                element:<Assignment></Assignment>
            },
            {
                path:'/create',
                element: <CreateAssignments></CreateAssignments>
            },
            {
                path:'/pending',
                element: <PendingAssignments></PendingAssignments>
            },
        ]
    }
])

export default router;