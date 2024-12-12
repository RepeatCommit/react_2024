import React from 'react';
import UsersComponent from "../components/UsersComponent";

const UsersPage = () => {




    return (
        <div>
            <UsersComponent />
        </div>
    );
};

export default UsersPage;

//2. Беремо сторінку з юзерами.
// При натисканні на конкретного юзера переходимо на нову сторінку, пердавши туди всі данні про юзера через state.