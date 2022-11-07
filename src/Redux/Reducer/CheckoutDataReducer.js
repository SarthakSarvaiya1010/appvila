/* eslint-disable array-callback-return */
import { CHECKOUT_GET_DATA, POST_API_DATA } from "../ActionType/ActionType"
// import { CHACKOUT_DATA, BILLING_DATA } from "../ActionType/ActionType";
const initialState = {
  payment_method: "bacs",
  payment_method_title: "Direct Bank Transfer",
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




// const ChackoutdataReducer = (state = initialState, action) => {
//   // console.log(action);

//   switch (action.type) {
//     case POST_API_DATA:
//       return { ...action.payload };

//     case CHECKOUT_GET_DATA:
//       let billingAdds = {
//         first_name: action.payload.first_name,
//         last_name: action.payload.last_name,
//         address_1: action.payload.address_1,
//         address_2: "",
//         city: action.payload.city,
//         state: "CA",
//         postcode: action.payload.postcode,
//         country: "US",
//         email: action.payload.email,
//         phone: action.payload.phone,
//       };
//       return {
//         ...state,
//         billing: billingAdds,
//       };

//     default:
//       return state;
//   }
// };

// export default ChackoutdataReducer;

const CheckoutDataReducer = (state = initialState, action) => {
  // console.log("CHECKOUT_GET_DATA",action.payload);
  switch (action.type) {
    case POST_API_DATA:
      return {
        ...action.payload,

      }



    case CHECKOUT_GET_DATA:
      let billingAdds = {
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        address_1: action.payload.address_1,
        address_2: "",
        city: action.payload.city,
        state: action.payload.state,
        postcode: action.payload.postcode,
        country: action.payload.country,
        email: action.payload.email,
        phone: action.payload.phone,
      };

      let shippingdata = {
        first_name: action.payload.shipping_first_name,
        last_name: action.payload.shipping_last_name,
        address_1: action.payload.shipping_address_1,
        address_2: "",
        city: action.payload.shipping_city,
        state: action.payload.shipping_state,
        postcode: action.payload.shipping_postcode,
        country: action.payload.shipping_country,
      }

      // let  product_id_data=action.payload_product.map((item)=>item  )
      // let  quantity_data=action.payload_product.map((item)=>item.quantity  )

      // let refed=state
      state.line_items = []

      action.payload_product.map((item) => {
        let line_items_data = {
          product_id: item.id,
          quantity: item.quantity
        }
        state.line_items.push(line_items_data)
      })









      // console.log("line_items_data===>",product_id_data);
      // console.log("line_items_data===>",quantity_data);
      console.log("line_items_data===>", action.payload_product);
      console.log("line_items_data===>", state.shipping);
      return {
        ...state,
        billing: billingAdds,
        shipping:shippingdata

      }


    default:
      return state
  }
}
// console.log("Userreducer", initialState.itemList );
export default CheckoutDataReducer;