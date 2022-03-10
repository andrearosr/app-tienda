import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import CategoryReducer from './reducers/category.reducer';
import BreadReducer from './reducers/bread.reducer';
import OrderReducer from './reducers/order.reducer';
import AuthReducer from './reducers/auth.reducer';

const RootReducer = combineReducers({
  categories: CategoryReducer,
  breads: BreadReducer,
  orders: OrderReducer,
  auth: AuthReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk));
