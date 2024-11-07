import React, {useEffect} from 'react';
import {postActions, useAppDispatch, useAppSelector, userActions} from "./redux/store";




function App() {

    const dispatch = useAppDispatch();
    const {userSlice:{users},postSlice:{posts}} = useAppSelector(state => state);
    useEffect(() => {
     dispatch(userActions.loadUsers());
     dispatch(postActions.loadPosts());
    }, []);




    return (
    <div>
        {
            users.map(user => (
                <div key={user.id}>
                    <h1>{user.name}</h1>
                    <h2>{user.email}</h2>
                </div>
            ))
        }
        <hr/>

        <ul>
            {
                posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))
            }
        </ul>


    </div>
  );
}

export default App;
