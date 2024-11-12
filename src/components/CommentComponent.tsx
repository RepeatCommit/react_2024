import React, {FC} from 'react';
import {IComment} from "../models/IComment";


type CommentProps = {
    comment: IComment
}

const CommentComponent:FC<CommentProps> = ({comment}) => {
    return (
        <div>
            {comment.body}
        </div>
    );
};

export default CommentComponent;