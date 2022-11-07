import api from "../Api";
import {GET_COUPONS_DETAILS , USER_ERROR ,APPLY_COUPON} from "../ActionType/ActionType"


export const GetCoupons = () => async (dispatch) => {
    try {
    const cart_Coupons = await api.get(`/coupons/`)  
    console.log("cart_Coupons.data" ,cart_Coupons.data);
      dispatch({
        type:GET_COUPONS_DETAILS,
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
};

export const Apply_Coupon = (applycoupon) => async (dispatch) => {
  console.log("Apply_Coupon",applycoupon);
  dispatch({
    type: APPLY_COUPON,
    payload: applycoupon
  });
}