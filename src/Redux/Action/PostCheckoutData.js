import { USER_ERROR ,POST_API_DATA ,CHECKOUT_GET_DATA  } from "../ActionType/ActionType";
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

export const CheckoutGetData = (data) => async (dispatch) => {

  dispatch({
    type :CHECKOUT_GET_DATA,
    
    payload : data,
    
  })
  }

