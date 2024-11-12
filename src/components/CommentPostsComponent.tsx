import React, {FC} from 'react';
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";



type IProps = {
    posts: IPost;
    comments: IComment | null


}
const CommentPostsComponent:FC<IProps> = ({posts,comments}) => {

    return (
        <div>
            {posts.title}
            <hr/>
            {comments?.body}
        </div>
    );
};

export default CommentPostsComponent;