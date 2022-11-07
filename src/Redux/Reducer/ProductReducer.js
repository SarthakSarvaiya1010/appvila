import { GET_PRODUCT_DETAILS } from "../ActionType/ActionType"
const initialState = {
    Cart_Product: [],
    loading: true, 
}

const ProductReducer=( state = initialState , action )=>{
    switch(action.type){
        case GET_PRODUCT_DETAILS :
            return {
                ...state,
                Cart_Product:action.payload[0],
                
                loading:false   
            }
        

        default: 
            return state
    }
}
// console.log("Userreducer", initialState.itemList );
export default ProductReducer;