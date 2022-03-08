import { CONFIRM_CART, RESET_CART } from '../actions/cart.action';

const INITIAL_STATE = {
  status: '',
  error: undefined,
}

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONFIRM_CART:
      return {
        ...state,
        status: action.status,
        error: action.error,
      }
    case RESET_CART:
      return {
        status: '',
        error: undefined,
      }
    default:
      return state;
  }
}

export default CartReducer;