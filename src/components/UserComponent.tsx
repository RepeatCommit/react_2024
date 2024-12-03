import React, {FC} from 'react';
import {IUser} from "../models/IUser";

type UserComponentProps<IUser> = IUser & {lift:(id:number)=>void}

const UserComponent:FC<UserComponentProps<IUser>> = ({id,name,lift}) => {






    return (
        <div>
            {id} - {name} -
            <button onClick={() =>{
                lift(id)}}> click </button>

        </div>
    );
};

export default UserComponent;