import { createContext, useContext } from 'react';

// creating the data layer
const MyContext = createContext();


// to pull the data 

export const useStateValue = () => useContext(MyContext);

export default MyContext;