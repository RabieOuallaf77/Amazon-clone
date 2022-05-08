import React, { useReducer } from 'react'
import MyContext from './MyContext'


const MyProvider = ({reducer, initialState, children}) => {
  return(
    <MyContext.Provider value={useReducer(reducer, initialState)} >

     {children}

    </MyContext.Provider>
  )

};

export default MyProvider
















/*

import React , { createContext, useContext, useReducer} from 'react';

// create state layout

export const StateContext = createContext();

// pass the data to StateContext

export const StateProvider = ({reducer , initialState, children}) => {

    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>

};

// pull the information from StateContext

export const useStateValue = () => useContext(StateContext);
*/