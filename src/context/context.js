import React, {createContext} from 'react';


export const Context = createContext()

export const ContextProvider= (props) => {

    return(
        <Context.Provider value={props}>
            {props.children}
        </Context.Provider>
    )
}