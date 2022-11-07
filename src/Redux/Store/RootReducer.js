import UserReducer from "../Reducer/UserReducer";
import CartReducer from "../Reducer/CartReducer";
import   ProductReducer from "../Reducer/ProductReducer"
import   CategoriesReducer from "../Reducer/CategoriesReducer"
import   CouponsReducer from "../Reducer/CouponsReducer"
import CheckoutDataReducer from"../Reducer/CheckoutDataReducer"
import ShippingMethodsReducer from"../Reducer/ShippingMethodsReducer"
import LocationDataReducer from"../Reducer/LocationDataReducer"
import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'



const RootReducer = combineReducers({
    User:UserReducer,
    cart:CartReducer,
    product:ProductReducer,
    Categories:CategoriesReducer,
    CheckoutData:CheckoutDataReducer,
    LocationData:LocationDataReducer,
    ShippingMethods:ShippingMethodsReducer,
    Coupons:CouponsReducer, 
    form: formReducer
})
export default RootReducer 