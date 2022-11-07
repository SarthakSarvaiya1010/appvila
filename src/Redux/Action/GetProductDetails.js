import api from "../Api";
import {GET_PRODUCT_DETAILS , USER_ERROR} from "../ActionType/ActionType"


export const GetProductDetails = ( slug) => async (dispatch) => {
  // let val=id
  // console.log("val",val);
    try {
    const cart = await api.get(`/products/?slug=${slug}` )  
    console.log("cart.data" ,cart.data);
      dispatch({
        type:GET_PRODUCT_DETAILS,
        payload:cart.data,
        
      }
    )

  
    
    
  } catch (e) {
    dispatch({
      payload: console.log(e),
      type: USER_ERROR,
    });
  }
};
