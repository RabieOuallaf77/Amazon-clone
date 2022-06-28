import React, {useContext, useState } from "react";

// create the layer
export const authContext = React.createContext();

// this function is to make the data useable
export function useAuth() {
    return useContext(authContext)
};

//this function is to give the layer a value (the data itself)

export function AuthProvider( { children } ) {

    // the variable that conatin user's data

    const [currentUser, setCurrentUser] = useState();
    
    // this variable to make the data readable by the <authContext.Provider>
    const value = {
        currentUser
    };

    // the provider (this is the piece of code thay return the value)

    return(
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    );
};

