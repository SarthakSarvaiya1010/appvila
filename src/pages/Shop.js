import React, { useEffect, useState } from 'react'
import { CustomCard } from "../components/Index"
import { useSelector, useDispatch } from "react-redux";
import { GetUser } from "../Redux/Action/users";
import { Container, Row, } from "react-bootstrap";
import "./shop.css"
// import "../../src/components/shopCard/CustomCard.css";
import ReactPaginate from 'react-paginate'
import LoadingSpinner from './LoadingSpinner';
import { CartData } from '../Redux/Action/CartData';
// import {GetCoupons} from "../Redux/Action/GetCoupons"





function Shop() {

    const dispatch = useDispatch();
    const users = useSelector((state) => state?.User?.Product);
    const [cureentPage, setCureentPage] = useState(1);
    let perPage = useSelector((state) => state?.User?.perPage);
    let itemTotal=useSelector((state) => state?.cart?.itemTotal);
    let cartTotal=useSelector((state) => state?.cart?.cartTotal);
    let pageCount = useSelector((state) => state?.User?.totalPages);
    let dataload = useSelector((state) => state?.User?.loading);
    const [hidden, setHidden] = useState({});

console.log("itemTotal",itemTotal);
console.log("cartTotal",cartTotal);


    useEffect(() => {
        const offset = (cureentPage - 1) * perPage;
        // setHidden({})
        console.log("offset", offset);
        dispatch(GetUser(
            { per_page: perPage, offset }
        ));
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cureentPage]);
    
    
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


    const handlestate = (e) => {
        setCureentPage(e.selected + 1)
        // window.location.reload(false)
        console.log("e.selected ==============>", e.selected + 1)
    }
    
    




    return (
        <div>
            <div>
                <Container>
                    <Row>
                        <div className="d-flex  justify-content-center"   >
                            <h2>Shop</h2>
                        </div>
                        <div>
                            {dataload === true ? <div>  <LoadingSpinner /> </div> :
                                <div className="d-flex flex-wrap  justify-content-center ">
                                    {users.map(
                                        ( info, id) => {
                                            return (
                                                <CustomCard   data={info} key={id}   ViewCart={ViewCart} showViewCart={!!hidden[info.id]}   />
                                            )
                                        })}
                                </div>}
                        </div>
                        <div className="d-flex justify-content-center " >
                            <ReactPaginate
                                breakLabel="..."
                                breakClassName={"break-me"}
                                nextLabel={"Next →"}
                                onPageChange={handlestate}
                                pageRangeDisplayed={perPage}
                                pageCount={pageCount}
                                previousLabel={"← Previous"}
                                renderOnZeroPageCount={null}
                                breakLinkClassName={'page-link'}
                                containerClassName={'pagination'}
                                pageClassName={'page-item'}
                                pageLinkClassName={'page-link'}
                                previousClassName={'page-item'}
                                previousLinkClassName={'page-link'}
                                nextClassName={'page-item'}
                                nextLinkClassName={'page-link'}
                                activeClassName={'active'}
                            />
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
export default Shop




