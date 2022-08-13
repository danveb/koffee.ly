import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "./cartConstant"; 

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch(action.type) {
        // CART_ADD_ITEM
        case CART_ADD_ITEM: 
            const item = action.payload; 
            const itemExists = state.cartItems.find((x) => x.product === item.product); 
            if(itemExists) {
                return {
                    ...state, 
                    cartItems: state.cartItems.map((x) => x.product === itemExists.product ? item : x),
                }; 
            } else {
                return {
                    ...state, 
                    cartItems: [...state.cartItems, item], 
                }; 
            }; 
        // CART_REMOVE_ITEM
        case CART_REMOVE_ITEM: 
            return {
                ...state, 
                cartItems: state.cartItems.filter((x) => x.product !== action.payload), 
            }; 
        default: 
            return state
    }; 
}; 