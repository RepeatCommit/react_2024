import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import React from "react";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import ErrorLayout from "../layouts/ErrorLayout";
import UserDetailsPage from "../pages/UserDetailsPage";
import PostDetailPage from "../pages/PostDetailPage";

export const routes = createBrowserRouter([
    {
        path: "/", element: <MainLayout />,children:[
            {index: true, element: <HomePage/>},
            {path: "users", element: <UsersPage/>},
            {path: "users/:id", element: <UserDetailsPage/>},
            {path: "posts", element: <PostsPage/>},
            {path: "posts/:id", element: <PostDetailPage/>},
            {path: "comments", element: <CommentsPage/>}],
             errorElement: <ErrorLayout/>




        },
]);