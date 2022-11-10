/* eslint-disable array-callback-return */
import { CHECKOUT_GET_DATA, POST_API_DATA ,GET_SHIPPING_METHODS , GET_SHIPPING_METHODS_DATA ,PAYMENT_GATEWAYS } from "../ActionType/ActionType"
// import { CHACKOUT_DATA, BILLING_DATA } from "../ActionType/ActionType";
const initialState = {
  payment_method: "",
  payment_method_title: "",
  set_paid: true,
  billing: {
    first_name: "",
    last_name: "",
    address_1: "",
    address_2: "",
    city: "",
    state: "",
    postcode: "",
    country: "",
    email: "",
    phone: "",
  },
  shipping: {
    first_name: "",
    last_name: "",
    address_1: "",
    address_2: "",
    city: "",
    state: "",
    postcode: "",
    country: "",
  },
  line_items: [],
  shipping_lines: [
    {
      method_id: "",
      method_title: "",
      total: "0",
    },
  ],
};






const CheckoutDataReducer = (state = initialState, action) => {
  // console.log("CHECKOUT_GET_DATA",action.payload);
  switch (action.type) {
    case POST_API_DATA:
      return {
        ...action.payload,

      }



    case CHECKOUT_GET_DATA:
      let billingAdds = {
        first_name: action.payload.val.first_name,
        last_name: action.payload.val.last_name,
        address_1: action.payload.val.address_1,
        address_2: "",
        city: action.payload.val.city,
        state: action.payload.val.state,
        postcode: action.payload.val.postcode,
        country: action.payload.val.country,
        email: action.payload.val.email,
        phone: action.payload.val.phone,
      };

      let shippingdata={
        first_name: "",
        last_name: "",
        address_1: "",
        address_2: "",
        city: "",
        state: "",
        postcode: "",
        country: "",
      }
      if(action.payload.val.shipping_first_name){
       shippingdata = {
        first_name: action.payload.val.shipping_first_name,
        last_name: action.payload.val.shipping_last_name,
        address_1: action.payload.val.shipping_address_1,
        address_2: "",
        city: action.payload.val.shipping_city,
        state: action.payload.val.shipping_state,
        postcode: action.payload.val.shipping_postcode,
        country: action.payload.val.shipping_country,
      }
        }
        else{
          shippingdata = {
          first_name: action.payload.val.first_name,
          last_name: action.payload.val.last_name,
          address_1: action.payload.val.address_1,
          address_2: "",
          city: action.payload.val.city,
          state: action.payload.val.shipping_state,
          postcode: action.payload.val.postcode,
          country: action.payload.val.country,
        }
      }

      // let  product_id_data=action.payload_product.map((item)=>item  )
      // let  quantity_data=action.payload_product.map((item)=>item.quantity  )

      // let refed=state
      state.line_items = []

      action.payload.product_data.map((item) => {
        let line_items_data = {
          product_id: item.id,
          quantity: item.quantity
        }
        state.line_items.push(line_items_data)
      })
            let payment_method_data= action.payload.paymentCng.id
            let payment_method_title_data=action.payload.paymentCng.method_title
            console.log("state145==>", state);
      return {
        ...state,
        billing: billingAdds,
        shipping:shippingdata,
        payment_method: payment_method_data,
        payment_method_title:payment_method_title_data
      }
      case GET_SHIPPING_METHODS:
       let  shipping_lines_data={
            method_id: action.payload[0].method_id,
            method_title: action.payload[0].method_title,
            total: action.payload[0]?.settings?.cost?.value || 0,
          }
          // state.shipping_lines.push(shipping_lines_data)
      return{
        ...state,
        shipping_lines:shipping_lines_data
      }


      case   GET_SHIPPING_METHODS_DATA :
        let  shipping_lines_methods_data={
          method_id: action.payload.method_id,
          method_title: action.payload.method_title,
          total: action.payload?.settings?.cost?.value || 0,
        }       
      return{
        ...state,
        shipping_lines:shipping_lines_methods_data
        }
        case PAYMENT_GATEWAYS :
          let payment_getway=action.payload[0].id;
          let payment_gateway_title=action.payload[0].method_title
        return{
          ...state,
          payment_method:  payment_getway,
          payment_method_title: payment_gateway_title,
          }


    default:
      return state
  }
}

export default CheckoutDataReducer;