import {useState} from "react";
import {ITodo} from "../models/ITodo";

 export const getUsers = async () =>{
  let response = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
  return response;

}