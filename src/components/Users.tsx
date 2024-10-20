import React, {useEffect, useState} from 'react';
import {getUsers} from "../services/api.service.users";
import {IUser} from "../models/IUser";
import User from "./user/User";

const Users = () => {

    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getUsers().then(res => setUsers(res));
    }, []);



    return (
        <div>
            {
                users.map((user: IUser) => (<User item={user} key={user.id} /> ))
            }
            
        </div>
    );
};

export default Users;