import { CHECKOUT_DATA , PAYMENT_GATEWAYS } from "../ActionType/ActionType"
const initialState = {
    CheckoutData: [],
    payment_gateways:[],
    loading: true,
}

const LocationDataReducer=( state = initialState , action )=>{
    switch(action.type){
        case CHECKOUT_DATA :
            
            return {
                ...state,
                CheckoutData:action.payload,
                loading:false   
            }
        case PAYMENT_GATEWAYS:   
        
        return{
            ...state,
            payment_gateways:action.payload
        }

        default: 
            return state
    }
}
// console.log("Userreducer", initialState.itemList );
export default LocationDataReducer;