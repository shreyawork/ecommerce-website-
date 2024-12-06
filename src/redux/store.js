import { createStore, combineReducers } from 'redux';
import CartReducer from '../reducer/cartReducer';
import ProductReducer from '../reducer/productReducer';
const rootReducer= combineReducers({
    cartReducer: CartReducer,
    productReducer: ProductReducer,
});
const store =createStore(rootReducer);
export default store;