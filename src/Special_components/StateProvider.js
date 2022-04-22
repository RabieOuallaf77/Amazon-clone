import React , { createContext , useContext, useReducer } from "react";

// create the dataLayer(Where we handle the data)'
export const StateContext = createContext();

// provide the dataLayer
export const StateProvided = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// pull informations from the dataLayer

export const useStateValue = () => useContext(StateContext);