import React, {FC, useEffect, useState} from 'react';
import './App.css';
import {IUser} from "./models/IUser";
import Users from "./components/Users";
import {ITodo} from "./models/ITodo";




const App: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

const lift  = (user: IUser) => {
    fetch('https://jsonplaceholder.typicode.com/todos?userId=' + user.id)
        .then(value => value.json())
        .then(( response: ITodo[] )=>{
            setTodos(response);


        });
    }

        return (
    <>
     <hr/>
        {

            todos.map((todo: ITodo) => <div>{todo.id} - {todo.title}</div>)
        }

        <hr/>
        <Users lift={lift} />

    </>
  );
}

export default App;
