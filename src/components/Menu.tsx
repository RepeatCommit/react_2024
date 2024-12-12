import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Menu.module.css";





const Menu = () => {
    return (
        <div>
            <ul className={styles.menu}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/users">users</Link>
                </li>
                <li>
                    <Link to="/posts">posts</Link>
                </li>
                <li>
                    <Link to="/comments">comments</Link>
                </li>
            </ul>

        </div>
    );
};

export default Menu;