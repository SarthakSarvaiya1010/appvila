import React from "react";
import "./CheckoutPage.css";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { LocationData, payment_gateways } from "../../Redux/Action/LocationData"
import { CheckoutGetData, PostApiData } from '../../Redux/Action/CheckoutData'
// import { useState } from "react";
// import { Field, reduxForm } from 'redux-form'
import FieldFrom from "./FieldFrom";
import { useState } from "react";
// import { BiErrorCircle } from "react-icons/bi"




function CheckoutPage() {

  const [alerted, setAlerted] = useState(false)
  let payment = useSelector((state) => state?.LocationData?.payment_gateways);
  const [shipOn ,setShipOn ]=useState(false)
  console.log("Country", payment);
  let cart_data = useSelector((state) => state?.cart);
  // const [apply_coupon, setApply_coupon] = useState(null);
  let apply_coupon = useSelector((state) => state?.Coupons);
  let Checkouted = useSelector((state) => state?.CheckoutData);

  let product_data = cart_data.cart
  console.log("product_data", product_data);
  // const [region, setRegion] = useState(null);
  console.log("apply_Coupons?.", apply_coupon);
  console.log("CheckoutData===>", Checkouted);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(LocationData())
    dispatch(payment_gateways())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // const submit  = (e) => {
  //   setRegion(e.target.value)

  // }

  const headalstate = () => {
    // dispatch(PostApiData(Checkouted ))
    console.log("Checkout submit", Checkouted);
  }
  const[test ,setTest]=useState(null)

  const submit = val => {
    // print the form values to the console
    dispatch(CheckoutGetData(val, product_data))
    setAlerted(true)
    if (val.first_name && val.last_name && val.address_1 && val.city && val.postcode && val.phone && val.email && val.country && val.state) {
      setAlerted(false)
    }
    
    console.log("let seee what's  happedin log ", val)
    return ;
  }

 


  return (
    <div>
      <Container>
        <Row>
          <div>
            <h1>Checkout</h1>
          </div>
          <div>
            {alerted ?
              <div className="alert alert-danger" role="alert">
                {!Checkouted.billing.first_name ? <div>Billing First name is a required field.</div> : null}
                {!Checkouted.billing.last_name ? <div>Billing  Last name is a required field.</div> : null}
                {!Checkouted.billing.country ? <div>Billing  country is a required field.</div> : null}
                {!Checkouted.billing.address_1 ? <div>Billing Street address is a required field</div> : null}
                {!Checkouted.billing.city ? <div>Billing  Town / City is a invalid.</div> : null}
                {!Checkouted.billing.state ? <div>Billing State is a required field.</div> : null}
                {!Checkouted.billing.postcode ? <div>Billing Postcode/ZIP is a required field</div> : null}
                {!Checkouted.billing.phone ? <div>Billing  Phone is a required field</div> : null}
                {!Checkouted.billing.email ? <div>Billing Email address is a required field.</div> : null}

              </div> : null}
          </div>

          <Col md={6}>
            <div className="billing">
              <div>
                <h3>Billing details</h3>
              </div>
              <FieldFrom onSubmit={submit}  prefix={""}  />
              <Row className="shipRow">
               <Col md={10}>
              <div style={{ fontSize: "30px"}}>
                <label for="Ship"> Ship to a different address? </label>
              </div>
              </Col>
              <Col md={2} >
              <input type="checkBox" id="Ship"          onChange={()=>{shipOn ? setShipOn(false) : setShipOn(true) }} style={{  width:"50px", height:"40px"}}  />
              </Col>
              </Row>
              {shipOn ?
              <div>
              <FieldFrom  prefix={"shipping_"}     onSubmit={submit}  />
              </div>: null}
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
                    <div >
                      <h4>Subtotal</h4>
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                {cart_data.cart.map((item) => {
                  return (
                    <div>
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
                  <Col>
                    <div className="checkOutOreder ordertotal">Subtotal</div>
                    <div className="checkOutOreder ordertotal">
                      {apply_coupon ? (
                        <div >
                          {/* <h4>Coupon:{Coupons.Cart_Coupons[1].code}</h4> */}
                          Coupon:{apply_coupon.Coupons_Code}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="checkOutOreder ordertotal">Totals</div>
                  </Col>
                  <Col>
                    <div className="checkOutPrice">
                      ${cart_data.cartTotal}.00
                    </div>
                    <div className="checkOutPrice">
                      {apply_coupon ? (
                        <div>-${apply_coupon.Coupons_Amount}</div>
                      ) : (
                        <div>
                          ${cart_data.cartTotal}
                          .00
                        </div>
                      )}
                    </div>
                    <div className="checkOutPrice">
                      <div>
                        ${cart_data.cartTotal - apply_coupon.Coupons_Amount}
                        .00
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="paymentMethod" >
                  {payment.map((item) => {
                    return (
                      <div className="payment">
                       <input type="radio" name='flexRadioDefault' value={item.title} id={item.title} onChange={(e)=>setTest(e.target.value)}   />
                      
                       <label className="labelTital" for={item.title} > {item.title}</label>  
                      {test ===item.title ? <div className="paymentDescription">{item.description}</div> : null }
                    </div>
                    )
                  })}
                </div>
                {/* <div>
      <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' label='Default radio' />
      <MDBRadio name='flexRadioDefault' id='flexRadioDefault2' label='Default checked radio' defaultChecked />
    </div> */}
              </div>
              <button className="PlaceOrder" onClick={headalstate}>
                Place order
              </button>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}



// CheckoutPage = reduxForm({
//   // a unique name for the form
//   form: 'contact'
// })(CheckoutPage)


export default CheckoutPage;





