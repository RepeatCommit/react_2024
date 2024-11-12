import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {commentActions, postActions} from "../redux/store";

const CommentsWithPostsPage = () => {

    const dispatch = useAppDispatch();
    const posts = useAppSelector(state => state.postSlice.posts);
    const comments = useAppSelector(state => state.commentSlice.comments);
    useEffect(() => {
        dispatch(postActions.loadPosts());
        dispatch(commentActions.loadComments());
    }, []);
    return (
        <div>
            {
                posts.map(post => {
                    const comment = comments.find(comment => comment.postId === post.id);
                    return (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <h4>Comment</h4>
                            <p>{comment?.id}</p>
                        </div>
                    )
                })

            }

        </div>
    );
};

export default CommentsWithPostsPage;