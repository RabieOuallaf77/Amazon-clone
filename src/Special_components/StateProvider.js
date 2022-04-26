import React , { createContext, useContext, useReducer} from 'react'

// create state layout
export const stateContext = createContext();


// pass the data to stateContext
export const stateProvider = ({reducer , initialValue, children}) => {
    <stateContext.Provider value={useReducer(reducer, initialValue)}>
        {children}
    </stateContext.Provider>
};

// pull the information from stateContext
export const useStateValue = () => useContext(stateContext())

