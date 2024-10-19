import React, {useEffect, useState} from 'react';
import {getUsers} from "../../services/api.service.users";
import {IUser} from "../../models/IUser";
import User from "../user/User";

const Users = () => {


    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getUsers().then(value => setUsers(value));
    }, []);

    return (
       <>
           {
               users.map((user: IUser) => (<User item={user} key={user.id}/>))
           }
       </>
    );
};

export default Users;