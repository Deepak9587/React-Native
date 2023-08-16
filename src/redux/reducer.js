import {ADD_TO_CART, REMOVE_FROM_CART} from './constant';

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];

    case REMOVE_FROM_CART:
      let resultedItem= state.filter((item)=>{
        return item.name!=action.data
      })
      return [...resultedItem];
    default:
        return state
  }
};
