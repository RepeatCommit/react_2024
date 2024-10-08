import React, {FC} from 'react';
import './Character.css'


interface IProps{
    name: string;
    status: string;
    gender: string;
    img: string;
    children?: React.ReactNode

}


const Character:FC<IProps> = ({children,name,status,gender,img}) => {


    return (
        <div>
            <h2 className={'item'}>{name}</h2>

            <ul>
                <li>status: {status}</li>
                <li>gender: {gender}</li>
            </ul>

            <img src={img} alt={name}/>
            <p>{children}</p>
        </div>
    );
};

export default Character;