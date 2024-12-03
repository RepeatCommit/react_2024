import React, {FC} from 'react';

interface CommentProps {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

const CommentComponent:FC<CommentProps> = ({postId,id,name,email,body}) => {
    return (
        <div>
            {postId} - {id} - {name} - {email} - {body}

        </div>
    );
};

export default CommentComponent;