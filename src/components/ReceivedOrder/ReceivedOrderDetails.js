import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from 'react-redux';

function ReceivedOrderDetails() {
  let Checkouted = useSelector((state) => state?.CheckoutData.Order_received_data);
console.log("Checkouted",Checkouted);
const d = new Date(Checkouted.data.date_created); 
let Subtotaldata=0
console.log("d",d);
    Checkouted.data.line_items.map((item)=>{
        return(
             Subtotaldata+=parseInt(item.subtotal)
        )
        })
        console.log("Subtotal",Subtotaldata);
return (
    <div>
        <Container >
            <div>
                <h1>Order received</h1>
                <h3>Thank you. Your order has been received.</h3>
            </div>
            <Row>
                <Col>
                <h2>ORDER NUMBER:</h2>
                <h4>{Checkouted.data.id}</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                <h2>DATE:</h2>
                <h4>{Checkouted.data.date_created}</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                <h2>EMAIL:</h2>
                <h4>{Checkouted.data.billing.email}</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                <h2>TOTAL:</h2>
                 <h4>${Checkouted.data.total}.00</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                <h2>PAYMENT METHOD:</h2>
                 <h4>{Checkouted.data.payment_method_title}</h4>
                </Col>
            </Row>
            
            <div><h2> Order details</h2></div>

        <Row>
<Row>    
<Col>
<h3>
Product
</h3>
</Col>
<Col>
<h3>
Total
</h3>
</Col>
</Row>
            
            {
                Checkouted.data.line_items.map((item)=>{
                    return(
                        <Row>
                        <Col>
                            <div>{item.name}X{item.quantity}</div>
                        </Col>
                        <Col>
                        <div>${item.subtotal}</div>

                        </Col>
                        </Row>
                    )
                })
            }
            <Row>
                <Col>
                <h3>
                subtotal
                </h3>
                </Col>

                <Col>
                <h3>
                {Subtotaldata}
                </h3>
                </Col>
            </Row>
            <Row>
                <Col>
                <h3>
                Discount
                </h3>
                </Col>
            <Col>
            <h3>
            {Checkouted.data.discount_total}
            </h3>
            </Col>
            </Row>
            <Row>
                <Col>
                <h3>
                Shipping:
                </h3>
                </Col>
            <Col>
            <h3>
            {Checkouted.data.shipping_lines[0].method_title}
            </h3>
            </Col>
            </Row>
            <Row>
                <Col>
                <h3>
                Payment method:
                </h3>
                </Col>
            <Col>
            <h3>
            {Checkouted.data.payment_method_title}
            </h3>
            </Col>
            </Row>
            <Row>
                <Col>
                <h3>
                Total:
                </h3>
                </Col>
            <Col>
            <h3>
            ${Checkouted.data.total}
            </h3>
            </Col>
            </Row>
            <Row>    
<Col>
<h3>
Billing address
</h3>
<span>
{Checkouted.data.billing.first_name}{" "}
{Checkouted.data.billing.last_name}
</span>
<br></br>
<span>
{Checkouted.data.billing.address_1}
</span>
<br></br>
<span>
{Checkouted.data.billing.city}
</span>{" "}
<span>
{Checkouted.data.billing.postcode}
</span><br></br>
<span>
{Checkouted.data.billing.state}
</span>
{" "}
<span>
{Checkouted.data.billing.country}
</span><br></br>
<span>
{Checkouted.data.billing.phone}
</span>
<h3>
    <span>
    {Checkouted.data.billing.email}
    </span>
</h3>
</Col>
<Col>
<h3>
Shipping address
</h3>
<span>
{Checkouted.data.billing.first_name}{" "}
{Checkouted.data.billing.last_name}
</span>
<br></br>
<span>
{Checkouted.data.billing.address_1}
</span>
<br></br>
<span>
{Checkouted.data.billing.city}
</span>{" "}
<span>
{Checkouted.data.billing.postcode}
</span><br></br>
<span>
{Checkouted.data.billing.state}
</span>
{" "}
<span>
{Checkouted.data.billing.country}
</span><br></br>

</Col>
</Row>
            

        
        </Row>
        </Container></div>
  )
}

export default ReceivedOrderDetails