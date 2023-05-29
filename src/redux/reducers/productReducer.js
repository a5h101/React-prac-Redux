import { ActionTypes } from '../constants/actionTypes';

const initialState = {
  product: [
    {
      id: 1,
      title: 'Akash',
      categoary: 'Redux-learner',
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
