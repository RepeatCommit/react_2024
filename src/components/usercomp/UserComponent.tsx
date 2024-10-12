import React, {FC, ReactNode} from 'react';
import IUserModel from "../../model/IUserModel";


type UserComponentWithChildren<T> = T & {children?: ReactNode} & {clickOnIt:(id:number) =>void};


const UserComponent: FC<UserComponentWithChildren<IUserModel>> = ({id,name,username,clickOnIt}) => {
    return (
        <div>
               {id} - {name} {username}
            <button onClick={() => {
                clickOnIt(id);
             }}>take a post</button>
        </div>
    );
};

export default UserComponent;