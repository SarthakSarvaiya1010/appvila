import React, { useState } from "react";
import { Badge, Button, Col } from "react-bootstrap";
import { Navbar, Container, Nav, Row } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import { FaRegWindowClose, FaTrash } from "react-icons/fa"
import { Delete_item } from "../../Redux/Action/CartData";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom"

function Nevbar() {
  
  const navigate = useNavigate()
  
  const dispatch = useDispatch();
  let cart_data = useSelector((state) => state?.cart)
  let itemTotal =cart_data.itemTotal                        /*  useSelector((state) => state?.cart?.itemTotal); */
  let cartTotal =cart_data.cartTotal                        /* useSelector((state) => state?.cart?.cartTotal);*/
  
  // console.log(itemTotal, "item");
  // console.log(cart_data, " cart_data====>");
  
  
  const [isHovering, setIsHovering] = useState(false);
  
  // let totalerty =cart_data.cart.map((item)=>item.quantity)
// console.log("totalerty",totalerty);

  const item_delet = (id) => {
    console.log("sarthak", id);

    dispatch(Delete_item(id));

  }


  const handleOpenCart = () => {
    setIsHovering(true)
  }

  const handleColseCart = () => {
    setIsHovering(false)
  }
  const handlestateCart = () => {
    navigate(`/cart`)
  }





  return (
    <div>
      <div className="bgc">
        <Container>
          <Row>
            <Navbar className="contner">
              <Nav className="cont-logo">
                <Nav.Link className="navText">Sarthak</Nav.Link>
              </Nav>
              <Nav className="cont-text">
                <NavLink className="navText" to="/"> Home </NavLink>
                <Nav.Link className="navText">Features</Nav.Link>
                <Nav.Link className="navText">Overview</Nav.Link>
                <Nav.Link className="navText">Pricing</Nav.Link>
                <Nav.Link className="navText">Team</Nav.Link>
                <Nav.Link className="navText">Blog</Nav.Link>
                <Nav>
                  <NavLink className="navCart" to="/cart"   >
                    Cart
                  </NavLink>
                </Nav>
                <Nav>
                  <FaShoppingCart className="navIcone" onClick={handleOpenCart} />
                  {cart_data.itemTotal > 0 ?
                    <Badge className="badge"> { itemTotal   }</Badge> : ""}
                </Nav>
              </Nav>

              <Nav className="contBtn">
                <NavLink to="/shop">
                  <Button className="contBtns"> Shop Now</Button>
                </NavLink>
              </Nav>
            </Navbar>
          </Row>
        </Container>
      </div>
      <div >
        <Container className="containerDiv" >

          <div className={isHovering ? 'hovering' : 'noneHovering'}   >
            <div className="cartDiters">
              <Card  >
                {cart_data.itemTotal !== 0 ?
                  <FaRegWindowClose onClick={handleColseCart} />
                  : ""}
                {cart_data.cart.map(
                  (info, id) => {
                    return (
                      <Row  key={id}>
                        <Card.Body >
                          <Col className="d-flex flexWrap  ">
                            <FaTrash onClick={() => item_delet(id)} />

                            <img src={info.images} alt="" width={70} className="rounded-circle" ></img>

                            <Col className="text-center">
                              <Card.Text  >{info.name}</Card.Text>
                              <Card.Text> {info.price} x {info.quantity} = {(info.price) * (info.quantity)}</Card.Text>
                            </Col>
                          </Col>
                        </Card.Body>
                      </Row>
                    )
                  })}
                {cartTotal !== 0 ?
                  <Card.Body>
                    <Card.Text>Subtotal: ${cartTotal}</Card.Text>
                  </Card.Body> : ""}
                {cartTotal !== 0 ?
                  <Button className="buttnCart" onClick={handlestateCart} >View to Cart</Button>
                  : ""}
              </Card>
            </div>
          </div>

        </Container>
      </div>
    </div>
  );
}

export default Nevbar;




