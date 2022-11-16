import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./ReceivedOrderDetails.css";

function ReceivedOrderDetails() {
  let Checkouted = useSelector(
    (state) => state?.CheckoutData.Order_received_data
  );
  console.log("Checkouted", Checkouted);


  const d = new Date(Checkouted?.data?.date_created);
  let month = d.toLocaleString('default', { month : 'long' , day :"numeric" ,year:"numeric" });
//   let year =d.getFullYear()
//   let y =   d.getDate();

  let Subtotaldata = 0;
  console.log("d",d);
  console.log("y",month );
//   console.log("y",y );
//   console.log("y",year );
  

//   let date = `${month}  ${y} ,  ${year}`
//   console.log("data",date);
  Checkouted?.data?.line_items.map((item) => {
    return (Subtotaldata += parseInt(item.subtotal));
  });
  console.log("Subtotal", Subtotaldata);
  return (
    <div>
      <Container>
        <div>
          <h1>Order received</h1>
          <h3>Thank you. Your order has been received.</h3>
        </div>
      </Container>
      {Checkouted?.data ? (
        <Container>
          <div className="OrderDetailsdata">
            <Row className="OrderDetails">
              <Col>
                <h4>ORDER NUMBER:</h4>
                <span>{Checkouted.data.id}</span>
              </Col>
            </Row>
            <Row className="OrderDetails">
              <Col>
                <h4>DATE:</h4>
                <span>{month}</span>
              </Col>
            </Row>
            <Row className="OrderDetails">
              <Col>
                <h4>EMAIL:</h4>
                <span>{Checkouted.data.billing.email}</span>
              </Col>
            </Row>
            <Row className="OrderDetails">
              <Col>
                <h4>TOTAL:</h4>
                <span>${Checkouted.data.total}</span>
              </Col>
            </Row>
            <Row className="OrderDetails">
              <Col>
                <h4>PAYMENT METHOD:</h4>
                <span>{Checkouted.data.payment_method_title}</span>
              </Col>
            </Row>
          </div>
          <div className="OrderDetailsMain" >
            <h2> Order details</h2>
          </div>
          <Row  >
            <Row className="ProductDetails">
              <Col >
                <h3>Product</h3>
              </Col>
              <Col>
                <h3>Total</h3>
              </Col>
            </Row>

            {Checkouted.data.line_items.map((item) => {
              return (
                <Row className="CheckoutedLine_items">
                  <Col >
                    <h4 >
                      {item.name}X{item.quantity}
                    </h4>
                  </Col>
                  <Col>
                    <h4>${item.subtotal}</h4>
                  </Col>
                </Row>
              );
            })}
            <Row>
            <div className="CheckoutedDataColor">
            <Row className="CheckoutedData" >
              <Col  >
                <h4>subtotal</h4>
              </Col>
              <Col>
                <h4>{Subtotaldata}</h4>
              </Col>
            </Row>
            <Row className="CheckoutedData">
              <Col>
                <h4>Discount</h4>
              </Col>
              <Col>
                <h4>{Checkouted.data.discount_total}</h4>
              </Col>
            </Row>
            <Row className="CheckoutedData">
              <Col>
                <h4>Shipping:</h4>
              </Col>
              <Col>
            {Checkouted.data.shipping_lines.map((item)=>{
                <h4>
                {item.method_title}</h4>
                })}
              </Col>
            </Row>
            <Row className="CheckoutedData">
              <Col>
                <h4>Payment method:</h4>
              </Col>
              <Col>
                <h4>{Checkouted.data.payment_method_title}</h4>
              </Col>
            </Row>
            <Row className="CheckoutedData">
              <Col>
                <h4>Total:</h4>
              </Col>
              <Col>
                <h4>${Checkouted.data.total}</h4>
              </Col>
            </Row>
            </div>
            </Row>
            <Row className="addressDataPdg">
              <Col className="addressData">
                <h4>Billing address</h4>
                <span>
                  {Checkouted.data.billing.first_name}{" "}
                  {Checkouted.data.billing.last_name}
                </span>
                <br></br>
                <span>{Checkouted.data.billing.address_1}</span>
                <br></br>
                <span>{Checkouted.data.billing.city}</span>{" "}
                <span>{Checkouted.data.billing.postcode}</span>
                <br></br>
                <span>{Checkouted.data.billing.state}</span>{" "}
                <span>{Checkouted.data.billing.country}</span>
                <br></br>
                <span>{Checkouted.data.billing.phone}</span>
                <h4>
                  <span>{Checkouted.data.billing.email}</span>
                </h4>
              </Col>
              <Col>
                <h4>Shipping address</h4>
                <span>
                  {Checkouted.data.billing.first_name}{" "}
                  {Checkouted.data.billing.last_name}
                </span>
                <br></br>
                <span>{Checkouted.data.billing.address_1}</span>
                <br></br>
                <span>{Checkouted.data.billing.city}</span>{" "}
                <span>{Checkouted.data.billing.postcode}</span>
                <br></br>
                <span>{Checkouted.data.billing.state}</span>{" "}
                <span>{Checkouted.data.billing.country}</span>
                <br></br>
              </Col>
            </Row>
          </Row>
        </Container>
      ) : null}
    </div>
  );
}

export default ReceivedOrderDetails;
