import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import styles from './Menu.module.css'

type MenuTypeProps = {icon?:string}
const Menu:FC<MenuTypeProps> = ({icon}) => {
    return (
        <div>
            <ul className={styles.menu}>
                <li>
                   <NavLink to={"/"}>HomePage</NavLink>
                </li>
                <li>
                    <NavLink to={"/login"}>login</NavLink>
                </li>
                <li>
                    <NavLink to={"/auth/resources"}>auth resources</NavLink>
                </li>
                <li>
                    {icon && <li><img src={icon} alt="icon"/></li>}
                </li>
            </ul>
            <hr/>
        </div>


    );
};

export default Menu;