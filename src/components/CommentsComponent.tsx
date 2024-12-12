import React, {useEffect, useState} from 'react';
import {getComments} from "../services/api.services";
import {IComment} from "../models/IComment";
import CommentComponent from "./CommentComponent";



const CommentsComponent = () => {


    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        getComments().then(value => setComments(value));

    }, []);

    return (
        <div>
            {
                comments.map(value => <CommentComponent item={value} key={value.id}/>)
            }

        </div>
    );
};

export default CommentsComponent;