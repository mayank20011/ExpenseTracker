import React, {createContext, useReducer} from 'react';
// Initial state



const initialState=
{
     transactions:
     [
        {id:1 , text: 'Flower', amount: -20},
        {id:2 , text: 'Food', amount: -150},
        {id:3 , text: 'Salary', amount: +1900},
        {id:4 , text: 'Gym', amount: -900}
     ]  
}



export const GlobalContext=createContext(initialState);
export const Globalprovider=({children})=>
{
  const [state,dispatch]=useReducer();
}