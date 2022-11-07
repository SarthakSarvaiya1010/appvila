import { GET_USER } from "../ActionType/ActionType"
const initialState = {
    Product: [],
    perPage:12,
    totalProducts: 0,
    totalPages:0,
    loading: true,
}

const UserReducer=( state = initialState , action )=>{
    switch(action.type){
        case GET_USER :
            // console.log("headers", action.headers);
            return {
                ...state,
                Product:action.payload,
                totalProducts:action.headers['x-wp-total'],
                totalPages:Math.ceil(action.headers['x-wp-total']/initialState.perPage),
                loading:false   
            }
        

        default: 
            return state
    }
}
// console.log("Userreducer", initialState.itemList );
export default UserReducer;



