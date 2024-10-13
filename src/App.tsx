import React, {useState} from 'react';
import './App.css';
import Users from "./components/users/Users";
import {postService} from "./components/services/dummy.api.service";
import {IPost} from "./models/IPost";
import Posts from "./components/posts/Posts";

function App() {

const [posts, setPosts] = useState<IPost[]>([]);
const lift = async (id: number)=>{
setPosts (await postService.getPostOfUser(id));
 }

  return (
    <>

<Users lift={lift}/>
        <hr/>

        <Posts posts={posts}/>
        <hr/>

    </>
  );
}

export default App;
