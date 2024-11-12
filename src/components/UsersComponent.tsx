import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector, userActions} from "../redux/store";
import UserComponent from "./UserComponent";

const UsersComponent = () => {
    const dispatch =  useAppDispatch();
    const users = useAppSelector(state => state.userSlice.users);
    useEffect(() => {
        dispatch(userActions.loadUsers());

    }, []);



    return (
        <div>
            {
                users.map(user =><UserComponent key={user.id} item={user}/>)
            }
            
        </div>
    );
};

export default UsersComponent;