import UserReducer from "../Reducer/UserReducer";
import CartReducer from "../Reducer/CartReducer";
import   ProductReducer from "../Reducer/ProductReducer"
import   CategoriesReducer from "../Reducer/CategoriesReducer"
import   CouponsReducer from "../Reducer/CouponsReducer"
import  PostCheckoutDataReducer from"../Reducer/PostCheckoutDataReducer"
// import ShippingMethodsReducer from"../Reducer/ShippingMethodsReducer"
import GetCheckoutDataReducer from"../Reducer/GetCheckoutDataReducer"
import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'



const RootReducer = combineReducers({
    User:UserReducer,
    cart:CartReducer,
    product:ProductReducer,
    Categories:CategoriesReducer,
    CheckoutData:PostCheckoutDataReducer,
    GetCheckoutData:GetCheckoutDataReducer,
    // ShippingMethods:ShippingMethodsReducer,
    Coupons:CouponsReducer, 
    form: formReducer
})
export default RootReducer 