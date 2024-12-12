import React, {FC} from 'react';
import {IUser} from "../models/IUser";
import {Link} from "react-router-dom";



type Props = {

    item: IUser;

}

const UserComponent:FC<Props> = ({item}) => {
    return (
        <div>
            <Link  state={{data:item}}  to={item.id.toString()}>{item.id} - {item.name} - {item.username} - {item.email} </Link>
            
        </div>
    );
};

export default UserComponent;