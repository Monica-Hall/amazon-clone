import React, {createContext, useContext, useReducer} from "react"; 

// - PREPARE OUR DATA LAYER 
export const StateContext = createContext(); 

// - WRAP OUR APP AND PROVIDE DATA LAYER FOR EACH COMPONENT
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
); 

// - PULL INFO FROM DATA LAYER 
export const useStateValue = () => useContext(StateContext); 