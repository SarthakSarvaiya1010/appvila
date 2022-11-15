import api from "../Api";
import {Get_CATEGORIES_DETAILS , USER_ERROR} from "../ActionType/ActionType"


export const GetCategories = (id) => async (dispatch) => {
    try {
    const cart = await api.get(`/products/?category=${id}`)  
    console.log("cart.data" ,cart.data);
      dispatch({
        type:Get_CATEGORIES_DETAILS,
        payload:cart.data
      }
    )

  } catch (e) {
    dispatch({
      payload: console.log(e),
      type: USER_ERROR,
    });
  }
};