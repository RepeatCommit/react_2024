import React, {FC} from 'react';
import {IComment} from "../models/IComment";
import CommentComponent from "./CommentComponent";


type IProps ={

    comments:IComment[]

}

const CommentsComponent:FC<IProps> = ({comments}) => {

    return (
        <div>
            {
                comments.map(comment=>
                    <CommentComponent
                        key={comment.id}
                        postId={comment.postId}
                        id={comment.id}
                        name={comment.name}
                        email={comment.email}
                        body={comment.body}/>)
            }

        </div>
    );
};

export default CommentsComponent;