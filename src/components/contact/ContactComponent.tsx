import React, {FC} from 'react';
import {NavLink, useNavigate} from "react-router-dom";

const ContactComponent: FC<any> = ({contact}) => {

  const navigate = useNavigate();

    const onClickNavHandler = () =>{
     navigate(contact.id.toString(),{state:{contact}});
    }

    return (
        <div>
            {contact.name}  <NavLink to={contact.id + ""} state={{contact}}>details</NavLink>
             or


 <button onClick={onClickNavHandler}

 >details button</button>

        </div>
    );
};

export default ContactComponent;