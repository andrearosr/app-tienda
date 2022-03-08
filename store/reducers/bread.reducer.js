import { BREADS } from '../../data/breads';

const INITIAL_STATE = {
  list: BREADS,
  selected: null,
  filteredList: [],
}

const BreadReducer = (state = INITIAL_STATE, action) => {
  return state;
}

export default BreadReducer;