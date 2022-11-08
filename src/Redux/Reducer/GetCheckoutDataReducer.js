import { CHECKOUT_DATA , PAYMENT_GATEWAYS , GET_SHIPPING_METHODS , GET_SHIPPING_METHODS_DATA} from "../ActionType/ActionType"
const initialState = {
    CheckoutData: [],
    payment_gateways:[],
    shipping_methods: [],
    shipping_methods_id:null,
    loading: true, 
}

const GetCheckoutDataReducer=( state = initialState , action )=>{
    console.log("shipping_methods=========>",state.shipping_methods);
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



        case GET_SHIPPING_METHODS :
            
           

        console.log("headers_coupons", action.payload);
            return {
                ...state,
                shipping_methods:action.payload,
                loading:false   
            }

            case GET_SHIPPING_METHODS_DATA:
                
            // state.shipping_methods.map((item)=>{
            //     if(item.title===action.payload.title){
                   
            //         item.active=true   
            //         console.log("check out" , item);
            //     }
            //     else{
            //         item.active=false
            //     }
               
            // })


            
            console.log("total total total" ,state.shipping_methods);

            return{
                    ...state,
                shipping_methods_id:action.payload.id     

                }   
        default: 
            return state
    }
}
// console.log("Userreducer", initialState.itemList );
export default GetCheckoutDataReducer;


