import React, {useEffect, useState} from 'react';
import {getPosts} from "../services/api.services";
import {IPost} from "../models/IPost";
import PostComponent from "./PostComponent";

const PostsComponent = () => {


    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getPosts().then(value => setPosts(value));
    }, []);

    return (
        <div>
            {
                posts.map(value => <PostComponent item={value} key={value.id}/>)
            }

            
        </div>
    );
};

export default PostsComponent;