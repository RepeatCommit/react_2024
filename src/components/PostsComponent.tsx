import React, {useEffect} from 'react';
import {postActions, useAppDispatch, useAppSelector} from "../redux/store";
import PostComponent from "./PostComponent";

const PostsComponent = () => {
    const dispatch =  useAppDispatch();
    const posts = useAppSelector(state => state.postSlice.posts);
    useEffect(() => {
        dispatch(postActions.loadPosts());

    }, []);


    return (
        <div>

                {
                    posts.map(post =><PostComponent key={post.id} post={post}/>)
                }


        </div>
    );
};

export default PostsComponent;