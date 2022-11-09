/* eslint-disable array-callback-return */
import { CHECKOUT_GET_DATA, POST_API_DATA } from "../ActionType/ActionType"
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
      method_id: "flat_rate",
      method_title: "Flat Rate",
      total: "10.00",
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

      console.log("state", state);
      return {
        ...state,
        billing: billingAdds,
        shipping:shippingdata,
        // payment_method: action.payload.paymentCng.id,
        // payment_method_title:action.payload.paymentCng.method_title
      }


    default:
      return state
  }
}

export default CheckoutDataReducer;