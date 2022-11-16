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
  shipping_lines: [],
  coupon_lines:[] ,
  Order_received_data:
    {data:{        "id": 116,
    "parent_id": 0,
    "status": "pending",
    "currency": "USD",
    "version": "6.9.4",
    "prices_include_tax": false,
    "date_created": "2022-11-15T13:41:52",
    "date_modified": "2022-11-15T13:41:53",
    "discount_total": "10.00",
    "discount_tax": "0.00",
    "shipping_total": "0.00",
    "shipping_tax": "0.00",
    "cart_tax": "0.00",
    "total": "71.00",
    "total_tax": "0.00",
    "customer_id": 0,
    "order_key": "wc_order_Ton9cFDivCYOK",
    "billing": {
        "first_name": "amisha",
        "last_name": "patel",
        "company": "",
        "address_1": "a-30,harijipark",
        "address_2": "",
        "city": "Ahmedabad",
        "state": "Gujarat",
        "postcode": "382345",
        "country": "India",
        "email": "teest@gmail.com",
        "phone": "1234567890"
    },
    "shipping": {
        "first_name": "amisha",
        "last_name": "patel",
        "company": "",
        "address_1": "a-30,harijipark",
        "address_2": "",
        "city": "Ahmedabad",
        "state": "Gujarat",
        "postcode": "382345",
        "country": "India",
        "phone": ""
    },
    "payment_method": "bacs",
    "payment_method_title": "Direct bank transfer",
    "transaction_id": "",
    "customer_ip_address": "",
    "customer_user_agent": "",
    "created_via": "rest-api",
    "customer_note": "",
    "date_completed": null,
    "date_paid": null,
    "cart_hash": "",
    "number": "116",
    "meta_data": [],
    "line_items": [
        {
            "id": 202,
            "name": "Vneck Tshirt",
            "product_id": 40,
            "variation_id": 0,
            "quantity": 1,
            "tax_class": "",
            "subtotal": "18.00",
            "subtotal_tax": "0.00",
            "total": "15.50",
            "total_tax": "0.00",
            "taxes": [],
            "meta_data": [],
            "sku": "",
            "price": 15.5,
            "image": {
                "id": "22",
                "src": "http://php74dev.com/wordpress/wp-content/uploads/2022/09/vneck-tee.jpg"
            },
            "parent_name": null
        },
        {
            "id": 203,
            "name": "Tshirt",
            "product_id": 39,
            "variation_id": 0,
            "quantity": 1,
            "tax_class": "",
            "subtotal": "18.00",
            "subtotal_tax": "0.00",
            "total": "15.50",
            "total_tax": "0.00",
            "taxes": [],
            "meta_data": [],
            "sku": "",
            "price": 15.5,
            "image": {
                "id": "21",
                "src": "http://php74dev.com/wordpress/wp-content/uploads/2022/09/tshirt.jpg"
            },
            "parent_name": null
        },
        {
            "id": 204,
            "name": "Polo",
            "product_id": 38,
            "variation_id": 0,
            "quantity": 1,
            "tax_class": "",
            "subtotal": "20.00",
            "subtotal_tax": "0.00",
            "total": "17.50",
            "total_tax": "0.00",
            "taxes": [],
            "meta_data": [],
            "sku": "",
            "price": 17.5,
            "image": {
                "id": "",
                "src": ""
            },
            "parent_name": null
        },
        {
            "id": 205,
            "name": "Long Sleeve Tee",
            "product_id": 37,
            "variation_id": 0,
            "quantity": 1,
            "tax_class": "",
            "subtotal": "25.00",
            "subtotal_tax": "0.00",
            "total": "22.50",
            "total_tax": "0.00",
            "taxes": [],
            "meta_data": [],
            "sku": "",
            "price": 22.5,
            "image": {
                "id": "18",
                "src": "http://php74dev.com/wordpress/wp-content/uploads/2022/09/long-sleeve-tee.jpg"
            },
            "parent_name": null
        }
    ],
    "tax_lines": [],
    "shipping_lines": [
        {
            "id": 206,
            "method_title": "Free shipping",
            "method_id": "free_shipping",
            "instance_id": "",
            "total": "0.00",
            "total_tax": "0.00",
            "taxes": [],
            "meta_data": []
        }
    ],
    "fee_lines": [],
    "coupon_lines": [
        {
            "id": 207,
            "code": "amisha",
            "discount": "10",
            "discount_tax": "0",
            "meta_data": [
                {
                    "id": 1594,
                    "key": "coupon_data",
                    "value": {
                        "id": 52,
                        "code": "amisha",
                        "amount": "10",
                        "status": "publish",
                        "date_created": {
                            "date": "2022-10-21 04:45:46.000000",
                            "timezone_type": 1,
                            "timezone": "+00:00"
                        },
                        "date_modified": {
                            "date": "2022-10-31 07:14:12.000000",
                            "timezone_type": 1,
                            "timezone": "+00:00"
                        },
                        "date_expires": {
                            "date": "2022-11-30 00:00:00.000000",
                            "timezone_type": 1,
                            "timezone": "+00:00"
                        },
                        "discount_type": "fixed_cart",
                        "description": "",
                        "usage_count": 15,
                        "individual_use": true,
                        "product_ids": [
                            36,
                            40
                        ],
                        "excluded_product_ids": [],
                        "usage_limit": 0,
                        "usage_limit_per_user": 0,
                        "limit_usage_to_x_items": null,
                        "free_shipping": false,
                        "product_categories": [],
                        "excluded_product_categories": [],
                        "exclude_sale_items": false,
                        "minimum_amount": "",
                        "maximum_amount": "",
                        "email_restrictions": [],
                        "virtual": false,
                        "meta_data": []
                    },
                    "display_key": "coupon_data",
                    "display_value": {
                        "id": 52,
                        "code": "amisha",
                        "amount": "10",
                        "status": "publish",
                        "date_created": {
                            "date": "2022-10-21 04:45:46.000000",
                            "timezone_type": 1,
                            "timezone": "+00:00"
                        },
                        "date_modified": {
                            "date": "2022-10-31 07:14:12.000000",
                            "timezone_type": 1,
                            "timezone": "+00:00"
                        },
                        "date_expires": {
                            "date": "2022-11-30 00:00:00.000000",
                            "timezone_type": 1,
                            "timezone": "+00:00"
                        },
                        "discount_type": "fixed_cart",
                        "description": "",
                        "usage_count": 15,
                        "individual_use": true,
                        "product_ids": [
                            36,
                            40
                        ],
                        "excluded_product_ids": [],
                        "usage_limit": 0,
                        "usage_limit_per_user": 0,
                        "limit_usage_to_x_items": null,
                        "free_shipping": false,
                        "product_categories": [],
                        "excluded_product_categories": [],
                        "exclude_sale_items": false,
                        "minimum_amount": "",
                        "maximum_amount": "",
                        "email_restrictions": [],
                        "virtual": false,
                        "meta_data": []
                    }
                }
            ]
        }
    ],
    "refunds": [],
    "payment_url": "http://php74dev.com/wordpress/checkout/order-pay/116/?pay_for_order=true&key=wc_order_Ton9cFDivCYOK",
    "is_editable": true,
    "needs_payment": true,
    "needs_processing": true,
    "date_created_gmt": "2022-11-15T13:41:52",
    "date_modified_gmt": "2022-11-15T13:41:53",
    "date_completed_gmt": null,
    "date_paid_gmt": null,
    "currency_symbol": "$",
    "_links": {
        "self": [
            {
                "href": "http://php74dev.com/wordpress/wp-json/wc/v3/orders/116"
            }
        ],
        "collection": [
            {
                "href": "http://php74dev.com/wordpress/wp-json/wc/v3/orders"
            }
        ]
    }
}}
  
};






const CheckoutDataReducer = (state = initialState,  action) => {
  // console.log("CHECKOUT_GET_DATA",state1);
  switch (action.type) {
    case POST_API_DATA:
      return {
        ...state,
        Order_received_data:action.payload,

        
      }
      
      
      
      case CHECKOUT_GET_DATA:
        console.log("CHECKOUT_GET_DATA",action.payload);
        console.log("log data entry point5==>",state.billing);
        
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

      // let shippingdata={
      //   first_name: "",
      //   last_name: "",
      //   address_1: "",
      //   address_2: "",
      //   city: "",
      //   state: "",
      //   postcode: "",
      //   country: "",
      // }
      // if(action.payload.val.shipping_first_name){
      let  shippingdata = {
         first_name: action.payload.val?.shipping_first_name  ||  action.payload.val.first_name  ,
         last_name: action.payload.val?.shipping_last_name   ||  action.payload.val.last_name,
         address_1: action.payload.val?.shipping_address_1 || action.payload.val.address_1,
        address_2: "",
        city: action.payload.val?.shipping_city || action.payload.val.city,
        state: action.payload.val?.shipping_state || action.payload.val.state,
        postcode: action.payload.val?.shipping_postcode || action.payload.val.postcode,
        country: action.payload.val?.shipping_country || action.payload.val.country,
       }
        // }
      //   else{
      //     shippingdata = {
      //     first_name: action.payload.val.first_name,
      //     last_name: action.payload.val.last_name,
      //     address_1: action.payload.val.address_1,
      //     address_2: "",
      //     city: action.payload.val.city,
      //     state: action.payload.val.state,
      //     postcode: action.payload.val.postcode,
      //     country: action.payload.val.country,
      //   }
      // }

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

      state.coupon_lines =[] 

      let codesf =action.payload?.setCoupons || null 
      console.log("action.payload?.setCoupons",action.payload?.setCoupons);
       
        let Coupons_code={
          code:action.payload?.setCoupons?.Coupons_Code ?  action.payload?.setCoupons?.Coupons_Code   : '' ,
          discount:action?.payload?.setCoupons?.Coupons_Amount ? action?.payload?.setCoupons?.Coupons_Amount :  '' 
       
        }
        state.coupon_lines.push(Coupons_code) 
        // state.coupon_lines
        
      console.log("codesf",codesf);  
      // state.coupon_lines.push(codesf)
      return {
        ...state,
        billing: billingAdds ,
        shipping:shippingdata,
        // coupon_lines:Coupons_code,
        payment_method: action?.payload?.paymentCng?.id   || null ,
        payment_method_title:action?.payload?.paymentCng?.method_title || null,
        
      }


      case GET_SHIPPING_METHODS:
       
        state.shipping_lines=[]
       let  shipping_lines_data={
            method_id: action.payload[0].method_id,
            method_title: action.payload[0].method_title,
            total: action.payload[0]?.settings?.cost?.value || "0",
          }
          state.shipping_lines.push(shipping_lines_data)
      return{
        ...state,
        
      }


      case   GET_SHIPPING_METHODS_DATA :

        state.shipping_lines =[]

        let  shipping_lines_methods_data={
          method_id: action.payload.method_id,
          method_title: action.payload.method_title,
          total: action.payload?.settings?.cost?.value || "0",
        }  
        state.shipping_lines.push(shipping_lines_methods_data)

      return{
        ...state,
        // shipping_lines:shipping_lines_methods_data
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