import React, {FC, ReactNode} from 'react';

type IPropsType = {
    name: string;
    status: string;
    type: string;
    gender: string;
    img: string;
    children?: React.ReactNode;
}

const Character: FC<IPropsType> = ({name,status,type,gender,img,children}) => {
    return (
        <div>
            <h2>{name}</h2>
            <ul>

                <li>status: {status}</li>
                <li>type: {type}</li>
                <li>gender: {gender}</li>
            </ul>

            <img src={img} alt={name}/>

            <p>{children}</p>


        </div>
    );
};

export default Character;