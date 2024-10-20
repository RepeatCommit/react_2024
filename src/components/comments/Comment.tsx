import React, {FC} from 'react';
import {IComment} from "../../models/IComment";


type CommentProps = {
    item:IComment;
}
const Comment:FC<CommentProps> = ({item}) => {
    return (
        <div>

            {item.body}


        </div>
    );
};

export default Comment;