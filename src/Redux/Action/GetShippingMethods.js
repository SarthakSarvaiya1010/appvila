import api from "../Api";
import {GET_SHIPPING_METHODS , USER_ERROR , GET_SHIPPING_METHODS_DATA } from "../ActionType/ActionType"


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