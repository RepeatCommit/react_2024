import React, {useEffect, useState} from 'react';
import { useParams} from "react-router-dom";
import {getUser} from "../services/api.service.usersinfo";
import {IUser} from "../models/IUser";

const UserDetailsPage = () => {

  let {id} = useParams();

  const [user, setUser] = useState<IUser|null>(null)
    useEffect(() => {
       if (id){
           getUser(id).then(value => setUser(value));

       }
    }, []);
    return (
        <div>
            {
                JSON.stringify(user)
            }
        </div>
    );
};

export default UserDetailsPage;