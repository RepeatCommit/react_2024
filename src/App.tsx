import React from 'react';
import './App.css';
import Character from "./components/character/Character";
import Users from "./components/users/Users";

function App() {
  return (
    <>
     <Character
         name={"Vance Maximus"}
         gender={'Male'}
         img={"https://rickandmortyapi.com/api/character/avatar/375.jpeg"}
         status={'Dead'}
     >

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quas?</p>
     </Character>



        <Character
            name={"Fascist Shrimp Rick"}
            status={"Alive"}
            gender={"Male"}
            img={"https://rickandmortyapi.com/api/character/avatar/503.jpeg"}
            />
            <hr/>

        <Users/>
    </>
  );
}

export default App;
