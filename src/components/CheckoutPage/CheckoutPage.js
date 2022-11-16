import React from "react";
import "./CheckoutPage.css";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  LocationData,
  payment_gateways,
} from "../../Redux/Action/GetCheckoutData";
import {
  PostApiData,
  CheckoutGetData,
} from "../../Redux/Action/PostCheckoutData";
import { GetShippingMethodsData } from "../../Redux/Action/GetCheckoutData";
import FieldFrom from "./FieldFrom";
import { useState } from "react";
import LoadingSpinner from "../../pages/LoadingSpinner";
import { useNavigate } from "react-router-dom";
// import{useNavigate} from "react-router-dom"
// import storage from 'redux-persist/lib/storage'

function CheckoutPage() {
  const [alerted, setAlerted] = useState(false);
  const [shipOn, setShipOn] = useState(false);
  let payment = useSelector(
    (state) => state?.GetCheckoutData?.payment_gateways
  );
  let payment_loadind = useSelector((state) => state?.GetCheckoutData?.payment_gateways_loading);
  let Checkouted = useSelector((state) => state?.CheckoutData);
  let datapym= payment.find((item) => item.id === Checkouted.payment_method);

  const [paymentCng, setPaymentCng] = useState(null );
  useEffect(()=>{
    setPaymentCng(datapym)

  }, [datapym])
  
  const [test, setTest] = useState(null);
  const[val , setVal]=useState(null)
  let ShippingData_id = useSelector(
    (state) => state?.CheckoutData?.shipping_lines
  );
  let cart_data = useSelector((state) => state?.cart);
  let apply_coupon = useSelector((state) => state?.Coupons);
  let ShippingData = useSelector((state) => state?.GetCheckoutData);
  let apply_coupon_data = useSelector((state) => state?.Coupons);
  let product_data = cart_data.cart;


  let ShippingCost  
  // ShippingData.shipping_methods.find(
  //   (item) => item.method_id === ShippingData_id[0].method_id
  // );

  ShippingData_id.map((item)=>
    ShippingCost=ShippingData.shipping_methods.find(
      (element) => element.method_id === item.method_id
    )    
  )



const dispatch = useDispatch();
const navigate = useNavigate();


  useEffect(() => {
    dispatch(LocationData());
    dispatch(payment_gateways());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const navigate=useNavigate()
  
  const headalstate = () => {
    // storage.removeItem('persist:root')
    // navigate(`/shop`)
    // window.location.reload();
    console.log("Checkout submit ", Checkouted);
    
    if (
      Checkouted?.billing?.address_1 &&
      Checkouted?.billing?.last_name &&
      Checkouted?.billing?.first_name &&
      Checkouted?.billing?.city &&
      Checkouted?.billing?.postcode &&
      Checkouted?.billing?.phone &&
      Checkouted?.billing?.email &&
      Checkouted?.billing?.country &&
      Checkouted?.billing?.state &&
      Checkouted?.shipping?.address_1 &&
      Checkouted?.shipping?.first_name &&
      Checkouted?.shipping?.last_name &&
      Checkouted?.shipping?.postcode &&
      Checkouted?.shipping?.city &&
      Checkouted?.shipping?.country &&
      Checkouted?.shipping?.state
    ) {
      console.log("Checkout submit AFTER aouth", Checkouted);
      // dispatch(PostApiData(Checkouted ))
      navigate("/receivedOrder")
    }
  };

  const headalPaymentState = (e) => {
    let setData = payment.find((item) => item.id === e.target.value);
    setPaymentCng(setData);
    dispatch(CheckoutGetData(setData))

  };

  console.log("Alerted",alerted);
  


  
  const submit = (val) => {
    // print the form values to the console
    dispatch(CheckoutGetData({ val: val,  product_data: product_data , setCoupons:apply_coupon_data , paymentCng:paymentCng }));
    
  setVal(val)
  // if(shipOn )
  // { 
      setAlerted({
        first_name:val.first_name,
        last_name:val.last_name ,
        address_1:val.address_1, 
        city:val.city ,
        postcode:val.postcode,
        phone:val.phone,
        email:val.email,
        country:val.country,
        state:val.state,
        shipping_first_name:val.shipping_first_name,
        shipping_last_name:val.shipping_last_name,
        shipping_postcode:val.shipping_postcode,
        shipping_state:val.shipping_state,
        shipping_address_1:val.shipping_address_1,
        shipping_country:val.shipping_country,
        shipping_city:val.shipping_city
      
      });
    // }
// else{
  
//   setAlerted({
//     first_name:val.first_name,
//     last_name:val.last_name ,
//     address_1:val.address_1, 
//     city:val.city ,
//     postcode:val.postcode,
//     phone:val.phone,
//     email:val.email,
//     country:val.country,
//     state:val.state
//   });
// }


    console.log("let seee what's  happedin log ", val);
    return;
  };

  const shipping = (e) => { 
    
    let data = ShippingData.shipping_methods.find(
      (item) => item.id ===parseInt(e.target.value)  
    );
    
    if (data.settings.cost) {
      setTest(data.settings.cost.value);
    } else {
      setTest(0);
    }
    dispatch(GetShippingMethodsData(data));
  };
  
const emailId =(values)=>{
  console.log("emailnoytdone",values);
}
  return (
    <div>
      <Container>
        {!payment_loadind ===true ? (
          <div>
            <Row>
              <div>
                <h1>Checkout</h1>
              </div>

              <div>
                {alerted ?
                <div>
                {alerted && shipOn && val ? (
                  <div className="alert alert-danger" role="alert">
                    {!alerted.first_name ? (
                      <div>Billing First name is a required field.</div>
                    ) : null}
                    {!alerted.last_name ? (
                      <div>Billing Last name is a required field.</div>
                    ) : null}
                    {!alerted.country ? (
                      <div>Billing country is a required field.</div>
                    ) : null}
                    {!alerted.address_1 ? (
                      <div>Billing Street address is a required field</div>
                    ) : null}
                    {!alerted.city ? (
                      <div>Billing Town / City is a invalid.</div>
                    ) : null}
                    {!alerted.state ? (
                      <div>Billing State is a required field.</div>
                    ) : null}
                    {!alerted.postcode ? (
                      <div>Billing Postcode/ZIP is a required field</div>
                    ) : null}
                    {!alerted.phone ? (
                      <div>Billing Phone is a required field</div>
                    ) : null}
                    {!alerted.email ? (
                      <div>Billing Email address is a required field.</div>
                    ) :null }
                    {!alerted.shipping_first_name ? (
                      <div>Shipping First name is a required field.</div>
                    ) : null}
                    {!alerted.shipping_last_name ? (
                      <div>Shipping Last name is a required field.</div>
                    ) : null}
                    {!alerted.shipping_country ? (
                      <div>Shipping country is a required field.</div>
                    ) : null}
                    {!alerted.shipping_address_1 ? (
                      <div>Shipping Street address is a required field.</div>
                    ) : null}
                    {!alerted.shipping_city ? (
                      <div>Shipping Town / City is a required field.</div>
                    ) : null}
                    {!alerted.shipping_city ? (
                      <div>Shipping Town / City is a required field.</div>
                    ) : null}
                    {!alerted.shipping_state ? (
                      <div>Shipping State is a required field.</div>
                    ) : null}
                    {!alerted.shipping_postcode ? (
                      <div>Shipping PIN Code is a required field.</div>
                    ) : null}
                  </div>
                ) :
                (
                  <div className="alert alert-danger" role="alert">
                    {!alerted.first_name ? (
                      <div>Billing First name is a required field.</div>
                    ) : null}
                    {!alerted.last_name ? (
                      <div>Billing Last name is a required field.</div>
                    ) : null}
                    {!alerted.country ? (
                      <div>Billing country is a required field.</div>
                    ) : null}
                    {!alerted.address_1 ? (
                      <div>Billing Street address is a required field</div>
                    ) : null}
                    {!alerted.city ? (
                      <div>Billing Town / City is a invalid.</div>
                    ) : null}
                    {!alerted.state ? (
                      <div>Billing State is a required field.</div>
                    ) : null}
                    {!alerted.postcode ? (
                      <div>Billing Postcode/ZIP is a required field</div>
                    ) : null}
                    {!alerted.phone ? (
                      <div>Billing Phone is a required field</div>
                    ) : null}
                    {!alerted.email ? (
                      <div>Billing Email address is a required field.</div>
                    ) :null }
                  </div>
                )
                 }
                 </div>
                 : null }
              </div>

              <Col md={6}>
                <div className="billing">
                  <div>
                    <h3>Billing details</h3>
                  </div>
                  <FieldFrom onSubmit={submit} prefix={""} excludes={""} emailID={emailId}   />
                  <Row className="shipRow">
                    <Col md={10}>
                      <div style={{ fontSize: "30px" }}>
                        <label htmlFor="Ship">
                          {" "}
                          Ship to a different address?{" "}
                        </label>
                      </div>
                    </Col>
                    <Col md={2}>
                      <input
                        type="checkBox"
                        id="Ship"
                        onChange={() => {
                          shipOn ? setShipOn(false) : setShipOn(true);
                        }}
                        style={{ width: "50px", height: "40px" }}
                      />
                    </Col>
                  </Row>
                  {shipOn ? (
                    <div>
                      <FieldFrom
                        prefix={"shipping_"}
                        onSubmit={submit}
                        excludes={["phone", "email"]}
                      />
                    </div>
                  ) : null}
                </div>
              </Col>
              <Col md={6}>
                <div className="order">
                  <div>
                    <h3>Your order</h3>
                  </div>

                  <div>
                    <Row className="header">
                      <Col>
                        <div>
                          <h4>Product</h4>
                        </div>
                      </Col>
                      <Col>
                        <div>
                          <h4>Subtotal</h4>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div>
                    {cart_data.cart.map((item , id)  => {
                      return (
                        <div key={id}>
                          <Row className="checkOutOreder">
                            <Col>
                              <div>
                                {item.name}
                                {""} x {""}
                                {item.quantity}
                              </div>
                            </Col>
                            <Col>${item.price * item.quantity}.00</Col>
                          </Row>
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    <Row>
                      <Row>
                        <Col>
                          <div className="checkOutOreder ordertotal">
                            Subtotal
                          </div>
                        </Col>
                        <Col>
                          <div className="checkOutPrice">
                            ${cart_data.cartTotal}.00
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          {apply_coupon.Coupons_Code ? (
                            <div className="checkOutOreder ordertotal">
                              <div>
                                {/* <h4>Coupon:{Coupons.Cart_Coupons[1].code}</h4> */}
                                Coupon:{apply_coupon.Coupons_Code}
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </Col>
                        <Col>
                          {apply_coupon.Coupons_Amount ? (
                            <div className="checkOutPrice">
                              <div>-${apply_coupon.Coupons_Amount}</div>
                            </div>
                          ) : (
                            ""
                          )}
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div className="checkOutOreder ordertotal">
                            Shipping
                          </div>
                        </Col>
                        <Col>
                          <div>
                            {ShippingData.shipping_methods.map((item , id) => {
                              return (
                                <div key={id}>
                                  
                                  <label>
                                  <input
                                    type="radio"
                                    name="flexRadioDefault"
                                    checked={ ShippingData_id.length >0 ?
                                      ShippingData_id.findIndex((element)=> item.method_id ===element.method_id) >-1   
                                       ?    item.method_id :  null  : id===0  }
                                    value={item.id}
                                    id={item.title}
                                    onChange={(e) => shipping(e)}
                                  />
                                    {" "}
                                    {item.title}{" "}
                                    {item.settings.cost
                                      ? `:$ ${item.settings.cost.value}.00`
                                      : null}
                                          

                                  </label>
                                </div>
                              );
                            })}
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <div className="checkOutOreder ordertotal">
                            Totals
                          </div>
                        </Col>
                        <Col>
                          <div className="checkOutPrice">
                            {ShippingCost?.settings?.cost &&
                            apply_coupon_data.Coupons_Amount ? (
                              <div>
                                $
                                {cart_data.cartTotal +
                                  parseInt(ShippingCost.settings.cost.value) -
                                  apply_coupon_data.Coupons_Amount}
                                .00
                              </div>
                            ) : (
                              <div>
                                {apply_coupon_data.Coupons_Amount ? (
                                  <div>
                                    $
                                    {cart_data.cartTotal -
                                      apply_coupon_data.Coupons_Amount}
                                    .00
                                  </div>
                                ) : ShippingCost?.settings?.cost ? (
                                  <div>
                                    $
                                    {cart_data.cartTotal +
                                      parseInt(
                                        ShippingCost.settings.cost.value
                                      )}
                                    .00
                                  </div>
                                ) : (
                                  <div>
                                    {" "}
                                    ${cart_data.cartTotal}
                                    .00
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </Col>
                      </Row>
                    </Row>
                    <div className="paymentMethod">
                      {payment.map((item, id) => {
                        return (
                          <div className="payment"  key={id}>
                            <label >
                            <input
                              type="radio"
                              name="radioDefault123"
                              value={item.id}
                              checked={
                                Checkouted.payment_method && !paymentCng
                                  ? Checkouted.payment_method === item.id
                                    ? Checkouted.payment_method
                                    : null
                                  : paymentCng
                                  ? item.id === paymentCng.id
                                  : null
                              }
                              id={item.title}
                              onChange={(e) => headalPaymentState(e)}
                            />
                              {" "}
                              {item.title}
                            </label>

                            {paymentCng? 
                              paymentCng.id === item.id ? (
                                <div className="paymentDescription">
                                  {item.description}
                                </div>
                              ): null : null
                            }
                          </div>
                        );
                      })}
                    </div>
                  
                  </div>
                  <button disabled={true} className="PlaceOrder" onClick={headalstate}>
                    Place order
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        ) : <div><LoadingSpinner />  </div>}
      </Container>
    </div>
  );
}

export default CheckoutPage;

