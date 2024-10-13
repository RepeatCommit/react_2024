import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";


const User:FC<IUserModel> = ({name,age}) => {
    return (
        <div>
            <li>{name} - {age}</li>
        </div>
    );
};

export default User;