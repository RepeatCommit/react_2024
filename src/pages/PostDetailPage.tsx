import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getCommentsOfPost} from "../services/api.services";
import {IComment} from "../models/IComment";

const PostDetailPage = () => {


    let{id}= useParams();

    const [comment, setComment] = useState<IComment[]>([]);

    useEffect(() => {
        if(id){
            getCommentsOfPost(id).then(value => setComment(value));

        }
    }, []);

    return (
        <div>
            {
                comment.map(value => <div key={value.id}> <li>{value.body} </li></div>)
            }
            
        </div>
    );
};

export default PostDetailPage;