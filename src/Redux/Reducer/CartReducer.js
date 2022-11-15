import { CART_DATA  , DELETE_ITEM ,UPDATE_CART_QTY} from "../ActionType/ActionType"
import { placeholder } from "../../assets/images";



const initialState = {
    cartTotal: 0,
    itemTotal: 0,
    cart: [],
    loading: true
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_DATA:            
            const cart_item = action.payload.data;            
            const cart_data =  state ;
            console.log("cart", action.payload?.quantity);
            console.log("cart ----total",state.cartTotal);
            if (state.itemTotal === 0) {
                let cartditelis = {
                    id: cart_item?.id,
                    name: cart_item?.name, 
                    type: cart_item?.type,
                    price: cart_item?.price,
                    images: cart_item?.images[0]?.src || placeholder,
                    slug: cart_item?.slug,
                    quantity: action.payload?.quantity
                }
                cart_data.cart.push(cartditelis)
            }
            else{
                
                let check = false;
                // eslint-disable-next-line array-callback-return
                cart_data.cart.map((item,key)=>{

                    if(item.id===cart_item.id){
                      cart_data.cart[key].quantity = parseInt(cart_data.cart[key].quantity) + parseInt(action.payload?.quantity)
                        check=true;
                    }
                });
            
           
                // cart_data.cart[key].quantity  action.payload?.quantity
 
                if(!check){
                    let _cart = {
                    id: cart_item?.id,
                    name: cart_item?.name,
                    type: cart_item?.type,
                    price: cart_item?.price,
                    images: cart_item?.images[0]?.src || placeholder,
                    slug: cart_item?.slug,
                    quantity: action.payload?.quantity
                }
                cart_data.cart.push(_cart)
            }
        }
        
            let newStatecartTotal=state
            newStatecartTotal.cartTotal=cart_data.cartTotal+action.payload?.quantity*cart_item?.price

        return { ...state ,
            itemTotal:state.itemTotal + action.payload?.quantity,
            // cartTotal:cart_data.cartTotal+action.payload?.quantity*cart_item?.price
        };
        
        case DELETE_ITEM:
            
            const  delete_item= action.payload;            
            // const delete_data = { ...state };
            // delete_data.cart.pop(delete_item)
            console.log("delete ======>>>",action.payload );
            
            let total_price=state.cart[delete_item].price*1;
            let totalItem=state.cart[delete_item].quantity;
                return {
                    ...state,
                    itemTotal:state.itemTotal - totalItem,
                    cartTotal:state.cartTotal-total_price*totalItem ,
                    cart:state.cart.filter((item) =>{
                        return  item.id !== state.cart[delete_item].id}
                    )
                } ;

         case UPDATE_CART_QTY :       
                const data=action.payload
                // console.log();
                let newState=state;
                let itemIndex=newState.cart.findIndex(item =>item.id===data.id)
                newState.cart[itemIndex].quantity=data.qty
                let Itemtotals=0
                newState.cart.forEach(element => {
                    Itemtotals = parseInt(element.quantity)+ Itemtotals
             
                         });
                  

                
                // let subtotal3=parseInt(subtotal)*parseInt(subtotal2)
                let Totals=0
                newState.cart.forEach(item =>{
                    Totals +=parseInt(item.quantity)*parseInt(item.price)
                })
                newState.cartTotal=Totals
                newState.itemTotal=Itemtotals
                return{
                    ...state,
                    // cartTotal:newState.cart[itemIndex].quantity*newState.cart[itemIndex].price +state.cartTotal
                    // cartTotal: newState.cart.cartTotal
         }


        default:
            return state;
    }
}


export default CartReducer;


