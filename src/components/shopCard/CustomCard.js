import React  from "react";
import { Card } from "react-bootstrap";
import "./customCard.css";
import { placeholder } from "../../assets/images/index";
import{useNavigate} from "react-router-dom"



function CustomCard(props) {

  const { data , ViewCart , showViewCart } = props;
  const saletag = data.on_sale === true ? <div className="saletag">sale</div> : null;
  const navigate=useNavigate()

  const handlestate =(data)=>{
    navigate(`/productDetails/${data.slug}`)
    console.log("/cart/",data.slug);
  }
  const handlestateCart =()=>{
    navigate(`/cart`)
}

  return (
    <div>
    <Card style={{ width: "17rem" }} className="customCard">
      <Card.Body
        style={{
          textAlignLast: "center",
          padding: "10px",
          textAlign: "center",
        }}
        onClick={()=>handlestate(data)}
      >
        <div className="cardtag">{saletag}</div>
        
        <Card.Img 
          src={data.images.length > 0 ? data.images[0].src : placeholder}
        ></Card.Img>
        
       
        <Card.Title style={{ fontSize: "15px", margin: "10px" }}>

          {data.name}
        </Card.Title>
        <Card.Text
          style={{ fontSize: "13px", margin: "10px" }}
          dangerouslySetInnerHTML={{ __html: data.price_html }}
        />                 
      </Card.Body>
    </Card>
    <Card style={{  }} className="customCard">
      <Card.Body style={{
          textAlignLast: "center",
          padding: "10px",
          textAlign: "center",
        }}>
     {data.type==="variable" ?    
     
     <button className="custBttnAdd" onClick={() => handlestate(data) } >  select option  </button>
    :
    <button className="custBttnAdd"  onClick={() => ViewCart(data) }>  Add to cart  </button>

    } 
                     
     
            {
              showViewCart ? <button className="custBttnViewed" onClick={handlestateCart} > View cart</button> : ''
           
           }
</Card.Body>
</Card>
    </div>

  );
}

export default CustomCard;