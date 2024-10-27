import React, {useEffect, useState} from 'react';
import {login} from "../services/api.services";
import {useOutletContext} from "react-router-dom";
import {IUserToken} from "../models/IUserToken";

const LoginPage = () => {

  const liftIcon =  useOutletContext<(iconLink:string)=>void>();
    const [user, setUser] = useState<IUserToken | null>(null);
    const [reason, setReason] = useState<string>('')
    useEffect(() => {
        login()
            .then(response => {
            liftIcon(response.image);
            setUser(response);
        }). catch(reason => setReason(reason));
    }, []);
    return (
        <div>
            LoginPage: {user?.firstName}
            {
                reason && <div>{reason}</div>
            }
        </div>
    );
};

export default LoginPage;