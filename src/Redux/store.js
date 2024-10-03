import { createStore, combineReducers } from 'redux';
import { cartReducer } from './cartReducer'; // Импортируем ваш редьюсер


// Функция для сохранения состояния в localStorage
function saveToLocalStorage(state) {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('cartState', serializedState);
    } catch (error) {
      console.error('Не удалось сохранить состояние в localStorage:', error);
    }
  }
  
  // Функция для загрузки состояния из localStorage
  function loadFromLocalStorage() {
    try {
      const serializedState = localStorage.getItem('cartState');
      if (serializedState === null) return undefined; // Если данных нет, вернем undefined
      return JSON.parse(serializedState);
    } catch (error) {
      console.error('Не удалось загрузить состояние из localStorage:', error);
      return undefined;
    }
  }
  
  const rootReducer = combineReducers({
    cart: cartReducer,
  });
  
  // Загружаем состояние из localStorage при инициализации хранилища
  const persistedState = loadFromLocalStorage();
  
  const store = createStore(
    rootReducer,
    persistedState, // Передаем сохраненное состояние в Redux
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
  // Подписываемся на изменения состояния и сохраняем его в localStorage
  store.subscribe(() => {
    saveToLocalStorage({
      cart: store.getState().cart,
    });
  });
  
  export default store;