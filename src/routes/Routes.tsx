import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ErrorLayout from "../layouts/ErrorLayout";
import UsersPage from "../pages/UsersPage";
import CommentsPage from "../pages/CommentsPage";
import UserDetailsPage from "../pages/UserDetailsPage";

export const routes = createBrowserRouter([
    {path:'/',element:<MainLayout/>,children: [
            {index: true,element:<HomePage/> },
            {path:'users',element: <UsersPage/>},
            {path:'users/:id',element: <UserDetailsPage/>},
            {path:'comments',element: <CommentsPage/>},



        ],
        errorElement: <ErrorLayout/>
    },

]);
