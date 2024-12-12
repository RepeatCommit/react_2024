import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {IUser} from "../models/IUser";
import {getPostOfUser} from "../services/api.services";
import {IPost} from "../models/IPost";



const UserDetailsPage = () => {

  let {state:{data}} = useLocation();
    const user: IUser = data;




   let {id}  = useParams();

   const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
    if(id){
        getPostOfUser(id).then(value => setPosts(value));
        }
    }, []);









    return (
        <div>

            {
                posts.map(value => <div key={value.id}> <li>{value.title} </li></div>)
            }


            <h1>{user.name}</h1>
           <div>{user.username}</div>






            
        </div>
    );
};

export default UserDetailsPage;