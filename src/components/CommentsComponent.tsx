import React, {useEffect} from 'react';
import {commentActions, useAppDispatch, useAppSelector} from "../redux/store";
import CommentComponent from "./CommentComponent";

const CommentsComponent = () => {
    const dispatch =  useAppDispatch();
    const comments = useAppSelector(state => state.commentSlice.comments);

    useEffect(() => {
        dispatch(commentActions.loadComments());

    }, []);



    return (
        <div>
            {
                comments.map(comment => <CommentComponent key={comment.body} comment={comment}/>)
            }

        </div>
    );
};

export default CommentsComponent;