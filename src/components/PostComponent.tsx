import React, {FC} from 'react';
import {IPost} from "../models/IPost";

type IPostProps = {

    post: IPost;
}

const PostComponent:FC<IPostProps> = ({post}) => {
    return (
        <div>
            {post.id} {post.title}

        </div>
    );
};

export default PostComponent;