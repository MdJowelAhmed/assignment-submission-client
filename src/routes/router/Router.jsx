import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../../pages/Home/Home";
import Assignment from "../../pages/assaignments/assignment/Assignment";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import CreateAssignments from "../../pages/assaignments/CreateAssignments/CreateAssignments";
import PendingAssignments from "../../pages/assaignments/pendingAssignments/PendingAssignments";
import Login from "../../pages/Authentication/Login";
import Register from "../../pages/Authentication/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/assignments',
                element: <Assignment></Assignment>,
                loader:()=>fetch(`${import.meta.env.VITE_API_URL}/assignment`)
            },
            {
                path: '/create',
                element: <PrivateRoute>
                    <CreateAssignments></CreateAssignments>
                </PrivateRoute>
            },
            {
                path: '/pending',
                element: <PrivateRoute>
                    <PendingAssignments></PendingAssignments>
                </PrivateRoute>
            },
        ]
    }
])

export default router;