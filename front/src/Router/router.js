import React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import AddPage from "../Page/Add";
import Home from "../Page/Home";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/Add",
        element: <AddPage/>,
    },

]);
export default router


