import {createBrowserRouter} from "react-router-dom";
import React from "react";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import ProductsPage from "../pages/ProductsPage";

export const router = createBrowserRouter([
    { path: '/', element: <MainLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'products', element: <ProductsPage/>},
        ]},
]);