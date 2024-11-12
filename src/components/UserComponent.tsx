import React, {FC} from 'react';
import {IUser} from "../models/IUser";


type IProps = {
    item: IUser;
}

const UserComponent: FC <IProps> = ({item}) => {
    return (
        <div>
            {item.id} {item.name}
        </div>
    );
};

export default UserComponent;