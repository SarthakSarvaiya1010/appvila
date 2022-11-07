import { GET_SHIPPING_METHODS  , GET_SHIPPING_METHODS_DATA} from "../ActionType/ActionType"
const initialState = {
    shipping_methods: [],
    shipping_methods_data: [],
    loading: true,
}

const ShippingMethodsReducer=( state = initialState , action )=>{
    
    switch(action.type){
        case GET_SHIPPING_METHODS :
            console.log("headers_coupons", action.payload);
            return {
                ...state,
                shipping_methods:action.payload,
                loading:false   
            }

        case GET_SHIPPING_METHODS_DATA:
            return{
                ...state,
                shipping_methods_data:action.payload
            }   

        default: 
            return state
    }
}
// console.log("Userreducer", initialState.itemList );
export default ShippingMethodsReducer;