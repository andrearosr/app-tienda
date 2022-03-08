import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import CategoryReducer from './reducers/category.reducer';
import BreadReducer from './reducers/bread.reducer';

const RootReducer = combineReducers({
  categories: CategoryReducer,
  breads: BreadReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk));
