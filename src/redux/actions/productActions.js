import { ActionTypes } from './../constants/actionTypes';

export const setProducts = product => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: product,
  };
};

export const selected_products = product => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};
