import React from 'react';
import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu";

const GeneralLayout = () => {
    return (
        <div>
            <Menu/>

            <Outlet/>
        </div>
    );
};

export default GeneralLayout;