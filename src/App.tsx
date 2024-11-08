import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector, userSliceActions} from "./store/store";




function App() {
  let {users,user}  = useAppSelector(state => state.userReducer);
  let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userSliceActions.loadUser(5));
    }, []);




    return (
    <div>
        {
            users.map(value => <div key={value.id}>{value.name}</div>)
        }


        {user && <div>{user.name}</div>}
    </div>
  );
}

export default App;
