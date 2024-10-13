import React from 'react';
import './App.css';
import Character from "./components/character/Character";
import Users from "./components/users/Users";


function App() {
    return (
        <>

            <Character
                name={"Frankenstein's Monster"}
                status={'Dead'}
                type={"Parasite"}
                gender={'Male'}
                img={"https://rickandmortyapi.com/api/character/avatar/128.jpeg"}

            >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, temporibus!
            </Character>

                    <Character
                name={"Mega Fruit Farmer Rick"}
                status={"Alive"}
                type={""}
                gender={"Male"}
                img={"https://rickandmortyapi.com/api/character/avatar/220.jpeg"}

            />
            <hr/>

             <Users/>
            </>
            );
            }

            export default App;
