import { ADD_TO_CART, REMOVE_FROM_CART } from './cartActionTypes';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Действие для добавления товара
export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
  });
  
  // Действие для удаления товара
  export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId,
  });

  