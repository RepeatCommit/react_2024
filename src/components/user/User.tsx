import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import {Link} from "react-router-dom";

type UserProps = {

    item:IUser;
}

const User:FC <UserProps> = ({item}) => {
    return (
        <div>
            <Link to={item.id.toString()}>{item.name}</Link>
        </div>
    );
};

export default User;