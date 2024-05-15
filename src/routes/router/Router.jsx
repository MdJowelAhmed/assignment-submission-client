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
import MyAttempt from "../../pages/MyAttempt/MyAttempt";
import DetailsAss from "../../pages/assaignments/assignment/DetailsAss";
import UpdateAssignment from "../../pages/assaignments/assignment/UpdateAssignment";
import Submission from "../../pages/assaignments/assignment/Submission";
import GiveMarks from "../../pages/assaignments/pendingAssignments/GiveMarks";


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
                path: '/attempt',
                element: <PrivateRoute> <MyAttempt></MyAttempt> </PrivateRoute>,
                loader: ()=>fetch(`${import.meta.env.VITE_API_URL}/submission`)
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><DetailsAss></DetailsAss></PrivateRoute>,
                loader: ()=>fetch(`${import.meta.env.VITE_API_URL}/assignment`)
            },
            {
                path: '/submit/:id',
                element: <PrivateRoute><Submission></Submission></PrivateRoute>,
                loader: ()=>fetch(`${import.meta.env.VITE_API_URL}/assignment`)
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
                loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/assignment/${params.id}`)

                // loader: ()=>fetch(`${import.meta.env.VITE_API_URL}/assignment`)
            },
                // loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/assignment/${params.id}`)
            
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
                </PrivateRoute>,
                 loader: ()=>fetch(`${import.meta.env.VITE_API_URL}/submission`)
            },
            {
                path: '/giveMarks/:id',
                element: <PrivateRoute>
                    <GiveMarks></GiveMarks>
                </PrivateRoute>,
                 loader: ()=>fetch(`${import.meta.env.VITE_API_URL}/submitted`)
                // loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/submission/${params.id}`)
            },
        ]
    }
])

export default router;