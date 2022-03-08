import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import CategoryReducer from './reducers/category.reducer';
import BreadReducer from './reducers/bread.reducer';
import CartReducer from './reducers/cart.reducer';
import OrderReducer from './reducers/order.reducer';

const RootReducer = combineReducers({
  categories: CategoryReducer,
  breads: BreadReducer,
  orders: OrderReducer,
  cart: CartReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk));
