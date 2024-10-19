import {createBrowserRouter} from "react-router-dom";
import GeneralLayout from "../layouts/GeneralLayout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";




export const  routes = createBrowserRouter([
    {
        path:'/',element:<GeneralLayout/>, children:[
            {index: true,element: <HomePage/>},
            {path:'users',element:<UsersPage/>},
            {path:'posts',element:<PostsPage/>},





         ]},

]);