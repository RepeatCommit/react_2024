import React from 'react';
import {users} from "../../data";
import {IUserModel} from "../../models/IUserModel";
import User from "../user/User";

const Users = () => {
    return (
        <ul>

            {

                users.map((value: IUserModel) => <li><User age={value.age} status={value.status} name={value.name} /></li> )
            }

            
        </ul>
    );
};

export default Users;