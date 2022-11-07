import { Get_CATEGORIES_DETAILS } from "../ActionType/ActionType"
const initialState = {
    Cart_Categories: [],
    loading: true,
}

const CategoriesReducer=( state = initialState , action )=>{
    switch(action.type){
        case Get_CATEGORIES_DETAILS :
            console.log("headers", action.payload);
            return {
                ...state,
                Cart_Categories:action.payload,
                loading:false   
            }
        

        default: 
            return state
    }
}
// console.log("Userreducer", initialState.itemList );
export default CategoriesReducer;