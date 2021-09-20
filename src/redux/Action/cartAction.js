import * as actionTypes from "./cartTypes.js";


export const setItem = (products) => {
    return {
      type: actionTypes.SET_ITEM,
      payload: products,
    };
  };
export const addToCart = (itemID) =>
{
    return {
        type: actionTypes.ADD_TO_CART,
        payload :
        {
            id: itemID,
        },
    };
};

export const removeFromCart = (itemID) =>
{
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload :
        {
            id: itemID,
        },
    };
};

export const adjustQty = (itemID,value) =>
{
    return {
        type: actionTypes.ADJUST_QTY,
        payload :
        {
            id: itemID,
            qty: value,
        },
    };
};