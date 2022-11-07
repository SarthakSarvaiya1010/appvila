import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./Overviewtwo.css"
import { FaAudible } from "react-icons/fa"

function Overviewtwo() {
    return (
        <div className='ovocont'>
            <Container >
                <Row>
                    <Col>
                        <div>
                            <div className="ovoImg">
                                <img src={require("./phone2.jpg")} alt="none" />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='texContenar'>
                            <div className='ovoicon'>
                                <div className='ovoicondiv'>
                                    <FaAudible className='iconColor' />
                                </div>
                            </div>
                            <div className='headText'>
                                <p>Seamless Loyalty</p>
                            </div>
                            <div className='mainText'>
                                <p>
                                    Collaborate over projects with your team and clients optimised for mobile and tablet don't let
                                    slow page speeds drive our innovative platform empowers
                                    anyone to convert clicks ou'll publish your first landing page in minutes.
                                </p>
                            </div>
                            <div className="ovobutton">
                                <Button className='ovoButt' > Get Started </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Overviewtwo













// {/* <div>
// <div className='ovoicon'>
//     <div className='ovoicondiv'>
//     <FaDownload className='iconColor'/>
//     </div>
// </div>
// <div className='headText'>
//     <p>1,25,000 Customers Using The Application!</p>
// </div>
// <div className='mainText'>
//     <p>
//     Collaborate over projects with your team and clients optimised for mobile and tablet don't let
//     slow page speeds drive our innovative platform empowers
//     anyone to convert clicks ou'll publish your first landing page in minutes.
//     </p>
// </div>
// <div className="ovobutton">
// <Button  className='ovoButt' > Get Started </Button>
// </div>
// </div> */}