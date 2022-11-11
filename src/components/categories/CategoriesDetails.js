import React, { useEffect , useState  } from 'react'
import { useParams } from "react-router"
import { useSelector , useDispatch } from "react-redux";
import { GetCategories } from "../../Redux/Action/GetCategories"
import { CustomCard } from '../Index';
import LoadingSpinner from '../../pages/LoadingSpinner';
import { Container , Row } from 'react-bootstrap';
import { CartData } from '../../Redux/Action/CartData';



function CategoriesDetails () {

    const params =useParams()
  const dispatch = useDispatch()
  const Categories = useSelector((state) => state?.Categories);
  const dataload = useSelector((state) => state?.Categories?.loading);
  const [hidden, setHidden] = useState({});
  
  
  const ViewCart = (data) => {
    if(!hidden[data.id]){
        setHidden({ ...hidden, [data.id]: !hidden[data.id] })
        console.log("hidden", hidden);
    }
    console.log("sarthak",data.id);
    dispatch(CartData
        ({data ,
        quantity:1  
}));
};

    const { id } = params
    console.log("categories",id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { dispatch(GetCategories(id))},[])
  return (
    <div>
                <Container>
                    <Row>
                        <div className="d-flex  justify-content-center"   >
                            <h2>Shop</h2>
                        </div>
                        <div>
                            {dataload === true ? <div>  <LoadingSpinner /> </div> :
                                <div className="d-flex flex-wrap  justify-content-center ">
                                    {Categories.Cart_Categories.map(
                                        ( info, id) => {
                                            return (
                                                <CustomCard   data={info} key={id}   ViewCart={ViewCart} showViewCart={!!hidden[info.id]}   />
                                            )
                                        })}
                                </div>}
                        </div>
                    </Row>
                </Container>
            </div>
  )
}
export default CategoriesDetails