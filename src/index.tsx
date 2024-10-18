
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import GeneraLayout from "./layouts/GeneraLayout";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contacts/ContactPage";
import ErrorLayout from "./layouts/error/ErrorLayout";
import SingleContactPage from "./pages/contact/SingleContactPage";




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const browseRouter = createBrowserRouter([
    {path:'/',
        element: <GeneraLayout/>,
        errorElement:<ErrorLayout/>,
        children:[
            {
                path: 'about',
                element: <AboutPage/>
            },
            {
                path: 'contacts',
                element: <ContactPage/>
            },
            {
                path:'contacts/:id',
                element: <SingleContactPage/>
            },
            {
                element:<AboutPage/>, index: true,
            }
        ]

    },

]);
root.render(

<RouterProvider router={browseRouter}/>

);

