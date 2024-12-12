import React, {FC} from 'react';
import {IComment} from "../models/IComment";


type CommentProps = {

    item: IComment;
}

const CommentComponent:FC<CommentProps> = ({item}) => {
    return (
        <div>


            <h2>{item.name} </h2>
            
            {item.body}
        </div>
    );
};

export default CommentComponent;