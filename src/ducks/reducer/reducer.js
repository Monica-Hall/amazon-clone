export const initialState = {
    basket: [], 

}; 

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0); 

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD":  
        return {
            ...state, 
            basket: [...state.basket, action.item]
        }

        case "EMPTY":
            return {
                ...state, 
                basket: []
            }

        case "REMOVE_FROM_CART":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
              );
              let newBasket = [...state.basket];
        
              if (index >= 0) {
                newBasket.splice(index, 1);
        
              } else {
                console.warn(
                  `Cannot remove product (id: ${action.id}) as it iss not in your cart!`
                )
              }
        
              return {
                ...state,
                basket: newBasket
              }

            case "SET_USER": 
            return {
                ...state, 
                user: action.user
            }

        default:
            return state; 
    }
}

export default reducer; 