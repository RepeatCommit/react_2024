import React, {FC} from 'react';
import {IPost} from "../models/IPost";
import {Link} from "react-router-dom";


type PostProps = {

    item: IPost;
}

const PostComponent:FC<PostProps> = ({item}) => {
    return (
        <div>
            <Link  to={item.id.toString()}>{item.title}</Link>

        </div>
    );
};

export default PostComponent;