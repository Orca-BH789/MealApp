// store.js
import { createStore, combineReducers } from 'redux';
import mealsReducer from './reducer/meals'; 

const rootReducer = combineReducers({
  meals: mealsReducer
});

const store = createStore(rootReducer);

export default store;
