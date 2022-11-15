import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Card, Nav, Tab } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router"
import { CartData } from '../../Redux/Action/CartData';
import "./ProductDetails.css"
import { GetProductDetails } from "../../Redux/Action/GetProductDetails"
import { useNavigate } from "react-router-dom"
import { placeholder } from '../../assets/images/index';
import { FaAngleRight } from 'react-icons/fa';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";




const ProductDetails = () => {

  const navigate = useNavigate()

  let cart_id = useSelector((state) => state?.product?.Cart_Product)
  const dispatch = useDispatch()
  const saletag = cart_id.on_sale === true ? <div className="saleTagOn">sale</div> : null;

  const params = useParams();
  const { slug } = params
  const [number, setNumber] = useState(1)
  const [images, setImages] = React.useState(null);
  const [select, setSelect] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { dispatch(GetProductDetails(slug)) }, [])

  console.log("cart_id", cart_id);

  const handlestate = (item) => {
    navigate(`/products/category${item.id}`)
  }
  // setLoading(false)

  const ViewCart = () => {
    dispatch(CartData
      ({
        data: cart_id,
        quantity: parseInt(number)
      }));
  }

  const attributesed = (e) => {
    console.log("that");
    setSelect(e.target.value)
  }
  console.log("select", select);



  useEffect(() => {
    let shouldCancel = false;
    if (!shouldCancel && cart_id.images && cart_id.images.length > 1) {
      setImages(
        cart_id?.images.map((data) => ({
          original: `${data.src}`,
          thumbnail: `${data.src}`
        }))
      );
    }
    else {
      setImages(null)
    }
    return () => (shouldCancel = true);

  }, [cart_id.images]);

  return (
    <div>
      <div>
        <Container >
          <Row className='cartRow' >

            <Col md={4} >
              <div>
                {saletag}
                {images ? <ImageGallery showFullscreenButton={false} showPlayButton={false} disableSwipe={false} swipeThreshold={300} items={images} /> :
                  <img src={cart_id.images ? cart_id?.images[0]?.src : placeholder} alt={cart_id.slug} style={{ width: "25rem" }} ></img>}
              </div>
            </Col>
            <Col md={8}  >
              <Card.Text>{cart_id.name} </Card.Text>
              <Card.Text dangerouslySetInnerHTML={{ __html: cart_id.price_html }} />
              {cart_id.type === "variable" ?

                <div>
                  {cart_id.attributes.filter(names => names.name === "Material").map((attributes, id) => (
                    <div key={id}>
                      <h6>{attributes.name}</h6>
                      <select className='divSelect' value={select} onChange={(e) => attributesed(e)}   >
                        <option value={null} >Choose an option</option>
                        {attributes.options.map((data, ids) =>
                          <option value={data} key={ids}   > {data} </option>
                        )}
                      </select>
                    </div>
                  ))
                  }
                  {cart_id.product_variations.map((attri) => (
                    <div>

                      <select>
                        {attri.attributes.filter(names => names.title === "Cotton").map(() => (
                          <>
                            {attri.attributes.filter(names => names.name === "Size").map((name) => (
                              <option>{name.title}</option>
                            ))}
                          </>
                        ))
                        }
                      </select>
                    </div>
                  ))}
                </div>
                : null}
              <input type="number" min={number} value={number} onChange={(e) => setNumber(e.target.value)} style={{ width: "54px", height: "35px" }} />
              <button className="custBttnAdd" onClick={ViewCart}  >  Add to cart  </button>

              {cart_id.categories ?
                <div style={{ display: "flex" }}> <Card.Text className='prodCate' >Category : </Card.Text>
                {cart_id.categories.map((item)=>
                 <Nav.Link className='prodCate' onClick={() => handlestate(item)}    > {item.slug}</Nav.Link> )}  </div> : null}
            </Col>
          </Row>
        </Container>
        <Container>
          <Tab.Container defaultActiveKey="first">
            <Row className='cartRow'>
              <Col md={3} >
                <Nav.Link eventKey="first" >Description </Nav.Link>
                <Nav.Link eventKey="second"> Reviews   </Nav.Link>
              </Col>
              <Col md={1}>
                <Tab.Pane eventKey="first">
                  <FaAngleRight />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <FaAngleRight />
                </Tab.Pane>
              </Col>
              <Col md={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Card.Text  >Description</Card.Text>
                    <Card.Text dangerouslySetInnerHTML={{ __html: cart_id.description }} ></Card.Text>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Card.Text >Reviews </Card.Text>
                    <Card.Text> There are no reviews yet. </Card.Text>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    </div>

  )


}

export default ProductDetails;




