import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={'users'}>users page</NavLink></li>
                <li><NavLink to={'posts'}>posts page</NavLink></li>
                <li><NavLink to={'comments'}>comments page</NavLink></li>
                <li><NavLink to={'commentPosts'}>comments and posts</NavLink></li>

            </ul>

            
        </div>
    );
};

export default Menu;