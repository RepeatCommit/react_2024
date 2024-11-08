import React from 'react';
import {Outlet} from "react-router-dom";
import Menu from "../menu/Menu";
import {Provider} from "react-redux";
import {store} from "../redux/store";


const MainLayout = () => {
    return (
        <div>

<Provider store={store}>

                <Menu/>
                <Outlet/>

        </Provider>




        </div>
    );
};

export default MainLayout;