import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../Layout/Dashboard";
import Tasks from "../Layout/Tasks";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/login',
                    element: <Login />
                },
                {
                    path: '/register',
                    element: <Register />
                },
            ]
        },
        {
            path: 'dashboard',
            element: <PrivetRoute><Dashboard /></PrivetRoute>,
            children: [
                {
                    path: 'dashboard',
                    element: <Tasks />
                }
            ]
        }
    ]
)

export default router;