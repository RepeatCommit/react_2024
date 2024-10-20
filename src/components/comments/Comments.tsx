import React, {useEffect, useState} from 'react';
import {getComments} from "../../services/api.services.comments";
import {IComment} from "../../models/IComment";
import Comment from "./Comment";

const Comments = () => {

    const [comments, setComments] = useState<IComment[]>([])
    useEffect(() => {
        getComments().then(value => setComments(value));
    }, []);

    return (
        <div>

            {
                comments.map((comment:IComment) => (<Comment item={comment} key={comment.id} />))
            }

        </div>
    );
};

export default Comments;