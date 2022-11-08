import { CHECKOUT_DATA, USER_ERROR ,PAYMENT_GATEWAYS ,GET_SHIPPING_METHODS , GET_SHIPPING_METHODS_DATA } from "../ActionType/ActionType";
import api from "../Api";

export const LocationData = () => async (dispatch) => {
    try {
      const res = await api.get("data/countries" );
  
      // console.log( "header", res.headers["X-WP-Total"] );
      dispatch({
        type: CHECKOUT_DATA,
        payload: res.data,
      });
      
    } catch (e) {
      dispatch({
        type: USER_ERROR,
        payload: console.log(e),
      });
    }
  };
  export const payment_gateways = () => async (dispatch) => {
    try {
      const res = await api.get("payment_gateways" );
  
      // console.log( "header", res.headers["X-WP-Total"] );
      dispatch({
        type: PAYMENT_GATEWAYS,
        payload: res.data,
      });
      
    } catch (e) {
      dispatch({
        type: USER_ERROR,
        payload: console.log(e),
      });
    }
  };



 
export const GetShippingMethods = () => async (dispatch) => {
  try {
  const cart_Coupons = await api.get(`shipping/zones/0/methods`)  
  console.log("GetShippingMethods.data" ,cart_Coupons.data);
    dispatch({
      type:GET_SHIPPING_METHODS,
      payload:cart_Coupons.data
    }
  )

   }
    catch (e) {
  dispatch({
    payload: console.log(e),
    type: USER_ERROR,
  });
}
}

export const GetShippingMethodsData =(values)=> (dispatch)=>{
  dispatch({
    payload: values,
    type:GET_SHIPPING_METHODS_DATA,
  })
}