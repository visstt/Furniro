import { ADD_TO_CART, REMOVE_FROM_CART } from './cartActionTypes';


const initialState = {
    cart: [],
  };
  
  export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
  
      case REMOVE_FROM_CART:
        console.log('Текущее состояние корзины:', state.cart); // Логируем текущее состояние
        const updatedCart = state.cart.filter(product => product.id !== action.payload);
        console.log('Обновленное состояние корзины:', updatedCart);  // Логируем обновленное состояние
        return {
          ...state,
          cart: updatedCart,
        };
  
      default:
        return state;
    }
  };