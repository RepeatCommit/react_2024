import React, {FC, useEffect, useState} from 'react';
import {getUsers} from "../services/api.services.users";
import {IUser} from "../models/IUser";
import UserComponent from "./UserComponent";

type UserComponentProps = {lift:(id:number)=>void}

    const UsersComponent:FC<UserComponentProps> = ({lift}) => {

        const   [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data));

    }, []);


    return (
        <div>
            {
                users.map(value =>
                    <UserComponent
                        key={value.id}
                        id={value.id}
                        name={value.name}
                        username={value.username}
                        email={value.email}
                         lift={lift}/>)
            }
            
        </div>
    );
};

export default UsersComponent;