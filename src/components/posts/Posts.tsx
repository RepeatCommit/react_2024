import React, {useEffect, useState} from 'react';
import {IPost} from "../../models/IPost";
import {getPosts} from "../../services/api.service.posts";
import Post from "../post/Post";

const Posts = () => {

    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getPosts().then(posts => setPosts(posts));
    }, []);

    
    
    return (
        <div>
            {
                posts.map((post) => (<Post item={post} key={post.id} />))
            }
            
        </div>
    );
};

export default Posts;