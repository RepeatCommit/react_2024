import React from 'react';
import {users} from "../../data";
import {IUserModel} from "../../models/IUserModel";

const Users = () => {
    return (
        <ul>
            {

                users.map((user: IUserModel) => <li>{user.name} {user.age}</li>)
            }
        </ul>
    );
};

export default Users;