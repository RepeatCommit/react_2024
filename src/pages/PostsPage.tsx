import React, {useEffect} from 'react';
import {useStore} from "../context/store";





const PostsPage = () => {

  let {postSlice:{loadPosts,allPosts}} =   useStore();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                loadPosts(value);
            });
    }, []);
    return (
        <div>
            {
                allPosts.map(post =>(<li key={post.id}>{post.title}</li>))
            }
        </div>
    );
};

export default PostsPage;