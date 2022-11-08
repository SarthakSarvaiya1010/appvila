import { CHECKOUT_GET_DATA,USER_ERROR ,POST_API_DATA   } from "../ActionType/ActionType";
import api from "../Api";



export const PostApiData = (data) => async (dispatch) => {
  
  try {

    const res = await api.post( "orders",  data );

    dispatch({

      type: POST_API_DATA,

      payload: { data: res.data },

    });

  } catch (error) {

    dispatch({

      type: USER_ERROR,

      payload: { data: error },

    });

  }
} 
export const CheckoutGetData = (val , product_data , payment_data) => async (dispatch) => {

dispatch({
  type :CHECKOUT_GET_DATA,
  payload_product:product_data,
  payload : val,
  payload_paymet:payment_data
})
}

