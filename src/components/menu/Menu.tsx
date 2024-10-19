import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Menu.module.css'


const Menu = () => {
    return (
        <div>
            <ul className={styles.menu}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/users">users</NavLink>
                </li>
                 <li>
                    <NavLink to="/posts">posts</NavLink>
                 </li>
        </ul>
            <hr/>
        </div>
    );
};

export default Menu;
