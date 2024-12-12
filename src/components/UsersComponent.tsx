import React from 'react';
import {getUsers} from "../services/api.services";
import {IUser} from "../models/IUser";
import UserComponent from "./UserComponent";
import {useEffect, useState} from "react";





const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);


    useEffect(() => {
      getUsers().then(value => setUsers(value));
    }, []);

    return (
        <div>
            {
                users.map(value => <UserComponent  item={value} key={value.id}/>)
            }

            
        </div>
    );
};

export default UsersComponent;