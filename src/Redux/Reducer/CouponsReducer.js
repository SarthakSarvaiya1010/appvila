import { GET_COUPONS_DETAILS ,APPLY_COUPON } from "../ActionType/ActionType"
const initialState = {
    Cart_Coupons: [],
    Coupons_Code:null,
    Coupons_Amount:null,
    loading: true,
}

const CouponsReducer=( state = initialState , action )=>{
    switch(action.type){
        case GET_COUPONS_DETAILS :
            console.log("headers_coupons", action.payload);
            return {
                ...state,
                Cart_Coupons:action.payload,
                loading:false   
            }
        case APPLY_COUPON :
            console.log("Coupons_Code action.payload",action.payload);
            return{
                ...state,
                Coupons_Code:action?.payload?.code || null,
                Coupons_Amount:action?.payload?.amount ||null,
                loading:false   
            }

        default: 
            return state
    }
}
// console.log("Userreducer", initialState.itemList );
export default CouponsReducer;