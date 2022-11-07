import { CHECKOUT_DATA, USER_ERROR ,PAYMENT_GATEWAYS } from "../ActionType/ActionType";
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



 