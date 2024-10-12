import React, {FC, useEffect, useState} from 'react';
import './App.css';
import IUserModel from "./model/IUserModel";
import UserComponent from "./components/usercomp/UserComponent";
import {getAllUsers} from "./components/services/user.api.service";
import PostsComponent from "./posts/PostsComponent";
import {IPost} from "./model/IPost";
import {getPostsOfUser} from "./components/services/post.api.service";





const App:FC = () => {

 const [users, setUsers] = useState<IUserModel[]>([]);
 const [userId,setUserId] = useState<number>(0);
 const [posts,setPosts] = useState<IPost[]>([])

 useEffect(() => {
     getAllUsers()
         .then(value =>{
             setUsers(value.data);

         })

     return () => {
         console.log('end');
     }

}, []);

    useEffect(() => {
     if (userId !== 0){
         getPostsOfUser(userId).then(value => setPosts(value.data));

     }

    }, [userId]);



 const clickOnIt = (id:number) => {
 setUserId(id);

 }


  return (
    <>
        {
            users.map(({  name,id,username})   =>

                <UserComponent key={id}
                               name={name}
                               id={id}
                               username={username}
                               clickOnIt={clickOnIt}




                /> )


        }

        <h2>
            <PostsComponent posts={posts}/>
        </h2>
    </>
  );
}

export default App;
