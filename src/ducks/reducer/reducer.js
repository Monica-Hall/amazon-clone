import { Add } from "@material-ui/icons";

export const initialState = {
    basket: [], 

}; 

const ADD = "ADD"; 

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD":  
        return {
            ...state, 
            basket: [...state.basket, action.item]
        }

        default:
            return state; 
    }
}

export default reducer; 