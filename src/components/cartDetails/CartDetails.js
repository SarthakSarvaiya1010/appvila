/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./cartDetails.css";
import { Delete_item, UpdataCartqty } from "../../Redux/Action/CartData";
import { FaTrash, FaArrowRight } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";
import { GetCoupons, Apply_Coupon } from "../../Redux/Action/GetCoupons";
import {  GetShippingMethods,GetShippingMethodsData, LocationData } from "../../Redux/Action/GetCheckoutData";
import { Container, Row, Card, Col, Button, NavLink } from "react-bootstrap";
import LoadingSpinner from "../../pages/LoadingSpinner";
import FieldFrom from "../CheckoutPage/FieldFrom";


function CartDetails() {
  
  
  

  const [apply_coupon, setApply_coupon] = useState(null);
  const [alerted, setAlerted] = useState(null);
  const [input2, setInput2] = useState("");
  const [wrong, setwrong] = useState(null);

  const [test, setTest] = useState(null);
  let shipping_data=useSelector((state)=>state?.CheckoutData)
  let Coupons = useSelector((state) => state?.Coupons);
  let cart_data = useSelector((state) => state?.cart);
  let ShippingData = useSelector((state) => state?.GetCheckoutData);
  let ShippingData_id = useSelector((state) => state?.CheckoutData?.shipping_lines);
  let apply_coupon_data = useSelector((state) => state?.Coupons);
  let loading =useSelector((state)=>state?.GetCheckoutData?.shipping_methods_loading)
let checked=false
  ShippingData.shipping_methods.map((item )=>  ShippingData_id.findIndex((element)=> item.method_id ==element.method_id) >-1     ?    checked=true   : console.log("not done is too mush",item.method_id))

  console.log("checked",checked);

  console.log("loading",loading);
  console.log("ShippingData_id in cart ",ShippingData_id);
  
   console.log("shipping_data?.billing?.address_1", shipping_data.billing.address_1)

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(GetCoupons());
      // dispatch(GetShippingMethods());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if(loading===true){
    dispatch(GetShippingMethods());
  }
  
  
  const shipping = (e)=>{
    let data=ShippingData.shipping_methods.find((item)=>item.id=== parseInt(e.target.value))
    dispatch(GetShippingMethodsData(data)) 
  }
   
  const  submit =(vals)=>{
    console.log("cart pade shpping  data",vals);
  }

  
  function inputTyp(e) {
    setInput2(e.target.value);
  }
  
  function validate() {
    const myres = Coupons.Cart_Coupons.find((item) => {
      return item.code === input2;
    });
    
    if (myres && !myres.product_ids.length) {
      setAlerted("Success");
      dispatch(Apply_Coupon(myres));
      window.scroll(0, 0);
      if (apply_coupon && myres.code === input2) {
        setAlerted("applied");
      }
      
      setApply_coupon(myres);
      return true;
    } else {
      setApply_coupon(null);
      setwrong(input2);
      setAlerted("wrong");
      window.scroll(0, 0);
      
      if (myres) {
        let testmyres = false;
        // eslint-disable-next-line array-callback-return
        cart_data.cart.map((element ) => {
          if (myres.product_ids.indexOf(element.id) > -1) {
            setAlerted("Success");
            setApply_coupon(myres);
            setwrong(null);
            dispatch(Apply_Coupon(myres));
            testmyres = true;
          }
        });
        if (!testmyres) {
          setAlerted("applicable");
        }
      }
      return false;
    }
  }
  
  const remove = () => {
    setApply_coupon("");
    window.scroll(0, 0);
    dispatch(Apply_Coupon(""));  
    setInput2("");
    setAlerted("remove");
  };
  
  const item_delet = (id, data) => {
    const myres123 = Coupons.Cart_Coupons.find((item) => {
      return item.code === input2;
    });
    
    dispatch(Delete_item(id));    
    window.scroll(0, 0);
    setwrong(data.name);
    const arry = [];
    cart_data.cart.forEach((element) => {
      arry.push(element.id);
    });
    setAlerted("delete");
    let removeIndex = arry.indexOf(data.id);
    if (removeIndex > -1) {
      arry.splice(removeIndex, 1);
    }
      

    if (myres123) 
    {
      var testmyres = true;
      let testcopuns=false
      if (myres123.product_ids.length > 0) {
        // eslint-disable-next-line array-callback-return
        myres123.product_ids.map((name) => {
          if (arry.indexOf(name) > -1) {
            setApply_coupon(myres123);
            dispatch(Apply_Coupon(myres123))
            testmyres = false;
            testcopuns=true
          } else {
            setApply_coupon("");
            
          }
        });
        if (testmyres) {
          setAlerted("applicable");
          
        }

        if(!testcopuns){
          dispatch(Apply_Coupon())

        }
      } else {
        setApply_coupon(myres123);
        dispatch(Apply_Coupon(myres123))
        // console.log("thay ja");
      }
    }
  };
  
  const navigate = useNavigate();
  
  const handlestateShop = () => {
    navigate("/shop");
  };
  
  const handlestateCheckout = () => {
      if(cart_data.cart.length >0){     
       navigate("/checkout");
      }
      
  };
  
  
  const upDateCart = (e, cartIndex) => {
    dispatch(
      UpdataCartqty({
        id: cartIndex,
        qty: e.target.value,
      })
      );
    };

    let  ShippingCost 
    // =ShippingData.shipping_methods.find((item)=>item.method_id==ShippingData_id[0].method_id)
    ShippingData_id.map((item)=>
    ShippingCost=ShippingData.shipping_methods.find(
      (element) => element.method_id === item.method_id 
    )    
  )
    console.log(ShippingCost,"ShippingCost");
    
    return (
      <div>
      <Container>
      {loading===true ?
                      <LoadingSpinner /> :
        <Row>
          <div className="hedarCart">
            <h1>Cart</h1>
          </div>
          <div>
            {alerted === "delete" ? (
              <div className="alert alert-success alert-dismissible d-flex align-items-center fade show">
                <div
                  className="bi-check-circle-fill"
                  style={{ fontSize: "1.5em", lineHeight: "1" }}
                ></div>
                <strong className="mx-2">Success!</strong> "{wrong}" removed..
              </div>
            ) : null}
          </div>
          {cart_data.cartTotal !== 0 ? (
            <div>
              {alerted === "Success" ? (
                <div className="alert alert-success alert-dismissible d-flex align-items-center fade show">
                  <div
                    className="bi-check-circle-fill"
                    style={{ fontSize: "1.5em", lineHeight: "1" }}
                  ></div>
                  <strong className="mx-2">Success!</strong> Coupon code applied
                  successfully..
                </div>
              ) : null}
              {alerted === "applied" ? (
                <div className="alert alert-danger alert-dismissible d-flex align-items-center fade show">
                  <BiErrorCircle />
                  Coupon code already applied!
                </div>
              ) : null}
              {alerted === "remove" ? (
                <div className="alert alert-success alert-dismissible d-flex align-items-center fade show">
                  <strong className="mx-2">Success!</strong> Coupon has been
                  removed..
                </div>
              ) : null}
              {alerted === "wrong" ? (
                <div className="alert alert-danger" role="alert">
                  <BiErrorCircle />
                  Coupon "{wrong}" does not exist!
                </div>
              ) : null}

              {alerted === "applicable" ? (
                <div className="alert alert-danger" role="alert">
                  <BiErrorCircle />
                  Sorry, this coupon is not applicable to selected products.
                </div>
              ) : null}

              <div className="hedarTextCart">
                <div></div>
                <h6>product</h6>
                <h6>Price</h6>
                <h6>Quantity</h6>
                <h6>Subtotal</h6>
              </div>

              {cart_data.cart.map((data, id) => {
                return (
                  <Row key={id}>
                    <Card.Body
                      className="d-flex    "
                      style={{ padding: "20px 0 20px 0" }}
                    >
                      <Col
                        md={1}
                        className="w-3"
                        // style={{ width: "50px" }}
                      >
                        <FaTrash onClick={() => item_delet(id, data)} />
                      </Col>
                      <Col md={2}>
                        <img src={data.images} alt="" width={100}></img>
                      </Col>
                      <Col md={3}>
                        <Card.Text> {data.name} </Card.Text>
                      </Col>
                      <Col md={2}>
                        <Card.Text> ${data.price}.00 </Card.Text>
                      </Col>
                      <Col md={2}>
                        <input
                          value={data.quantity}
                          min={1}
                          type="number"
                          onChange={(e) => upDateCart(e, data.id)}
                          className=" w-25 ms-5"
                          // style={{ width: "50px", marginLeft: "50px" }}
                        />
                      </Col>
                      <Col md={3}>
                        <Card.Text
                          className="gap-3 "
                          // style={{ marginLeft: "120px" }}
                        >
                          ${data.price * data.quantity}.00
                        </Card.Text>
                      </Col>
                    </Card.Body>
                  </Row>
                );
              })}
              <div>
                {apply_coupon_data.Coupons_Code ? (
                  <button
                    type="text"
                    className="couponInp"
                    placeholder="coupon cosde"
                  >
                    {" "}
                    {apply_coupon_data.Coupons_Code}{" "}
                  </button>
                ) : (
                  <input
                    type="text"
                    value={input2}
                    onChange={(e) => inputTyp(e)}
                    className="couponInp"
                    name="coupon"
                    placeholder="coupon cosde"
                  />
                )}
                {apply_coupon_data.Coupons_Code ? (
                  <button
                    className="couponBtn"
                    // style={{ height:"50px" , border:"none" , width:"200px" , marginLeft:"20px" }}
                    onClick={() => remove()}
                  >
                    remove
                  </button>
                ) : (
                  <button
                    className="couponBtn"
                    // style={{ height:"50px" , border:"none" , width:"200px" , marginLeft:"20px" }}
                    onClick={() => validate()}
                  >
                    Apply coupon
                  </button>
                )}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3>Cart totals</h3>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Row style={{ width: "500px" }}>
                  <Row>
                    <Col>
                      <div className="CarTtotalsDiv">
                        <h4>Subtotal  </h4>
                        <h4>{apply_coupon?.code}</h4>
                      </div>
                    </Col>

                    <Col>
                      <div>
                        <h4>${cart_data.cartTotal}.00</h4>
                      </div>
                    </Col>
                  </Row>
                  {apply_coupon_data.Coupons_Code ? (
                    <Row>
                      <Col>
                        {" "}
                        <div className="CarTtotalsDiv">
                          {/* <h4>Coupon:{Coupons.Cart_Coupons[1].code}</h4> */}
                          <h4>Coupons :{apply_coupon_data.Coupons_Code}</h4>
                         </div>
                      </Col>
                      <Col>
                        <div>
                          <h4>-${apply_coupon_data.Coupons_Amount}</h4>
                          <NavLink onClick={() => remove()}>[remove]</NavLink>
                        </div>
                      </Col>
                    </Row>
                  ) : null}
                  <Row>
                    <Col>
                      <div className="CarTtotalsDiv">
                        <h4>Shipping</h4>
                      </div>
                    </Col>
                    <Col>
                      <div>
                        
                         
                        {ShippingData.shipping_methods.map((item , id) => {
                          return (
                            <div key={id}>
                            
                              <label  >
                                
                              <input
                                type="radio"
                                name="flexRadioDefault"
                                value={item.id}
                                checked={ ShippingData_id.length >0 ?
                                   ShippingData_id.findIndex((element)=> item.method_id ==element.method_id) >-1   
                                    ?   item.method_id  :  null  : id===0  }
                                id={item.title}
                                onChange={(e) => shipping(e)}
                              />
                              {" "}
                                {item.title}{" "}
                                {item?.settings?.cost
                                  ? `:$ ${item.settings.cost.value}.00`
                                  : null}  
                              </label>

                            </div>
                          );
                        })}
                      
                      </div>
                      {
                        shipping_data?.billing?.address_1?.length > 0   ? <div> Shipping to {""}
                       <p>  {shipping_data?.billing?.address_1}  {shipping_data?.billing?.city} , {shipping_data?.billing?.state} , {shipping_data?.billing?.country}
                       </p></div> : null
                        }
                      <NavLink  onClick={()=>test ? setTest(false) : setTest(true)} >cheng address</NavLink>
                        {
                          test ?
                          <FieldFrom 
                          
                    prefix={"shipping_"}
                    onSubmit={submit}
                    excludes={["phone", "email","first_name","last_name" ,"Company_name","address_1" ,"Order_notes" ]}
                  /> :null
                        }
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="CarTtotalsDiv">
                        <h4>Total</h4>
                      </div>
                    </Col>
                    <Col>
                      <div>
                        {
                          ShippingCost?.settings?.cost && apply_coupon_data.Coupons_Amount ? (
                            <h4>
                              $
                              {cart_data.cartTotal +
                                parseInt(ShippingCost.settings.cost.value)  -
                                apply_coupon_data.Coupons_Amount}
                              .00
                            </h4>
                          ) : (
                            <div>
                              {   apply_coupon_data.Coupons_Amount ? (
                                <h4>
                                  $
                                  {cart_data.cartTotal -
                                    apply_coupon_data.Coupons_Amount}
                                  .00
                                </h4>
                              ) :     ShippingCost?.settings?.cost ? (
                                <h4>
                                  ${cart_data.cartTotal + parseInt(ShippingCost.settings.cost.value)}
                                  .00
                                </h4>
                              ) : (
                                <h4>
                                  ${cart_data.cartTotal}
                                  .00
                                </h4>
                              )}
                            </div>
                          )
                          
                              
                              }
                      </div>
                    </Col>
                  </Row>
                </Row>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "black",
                    display: "flex",
                    color: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "350px",
                  }}
                >
                  <NavLink>
                    <h4 onClick={handlestateCheckout}>
                      Proceed to checkout <FaArrowRight />
                    </h4>
                  </NavLink>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div>
                <div className="alert alert-info alert-dismissible d-flex align-items-center fade show">
                  Your cart is currently empty..
                </div>
              </div>

              <div className="futterTextCart">
                <Button onClick={handlestateShop}>Return to Shop</Button>
              </div>
            </div>
          )}
        </Row>
            }
          
      </Container>
    </div>
  );
}

export default CartDetails;






