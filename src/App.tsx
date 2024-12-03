import React, {FC, useEffect, useState} from 'react';
import UsersComponent from "./components/UsersComponent";
import CommentsComponent from "./components/CommentsComponent";
import {IComment} from "./models/IComment";
import {getComment, getCommentsOfUser} from "./services/api.service.posts";

const App:FC = () => {


    const  [userId] = useState<number>(0)
    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {

        if(userId !== 0){

            getCommentsOfUser(userId).then(value =>setComments(value.data))

        }
        }, [userId]);


    const lift = async (id: number) => {
        setComments( await getComment(id).then(value => [value.data]))
    };

    return (
        <div>
            <h3><UsersComponent lift={lift}/></h3>

            <hr/>

            <h2><CommentsComponent comments={comments}/></h2>




        </div>
    );
};

export default App;

