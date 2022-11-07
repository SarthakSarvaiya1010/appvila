import { CART_DATA, DELETE_ITEM ,UPDATE_CART_QTY  } from "../ActionType/CartActionType"


export const CartData = (data) => async (dispatch) => {

  // console.log( "header", res.headers["X-WP-Total"] );
  dispatch({
    type: CART_DATA,
    payload: data
  });
}
export const Delete_item = (deleteItem) => async (dispatch) => {
  dispatch({
    type: DELETE_ITEM,
    payload: deleteItem
  });
  
  
}

 export const UpdataCartqty = (cartqty) => async (dispatch) => {
    dispatch({
      type: UPDATE_CART_QTY,
      payload:cartqty
    });
  }

