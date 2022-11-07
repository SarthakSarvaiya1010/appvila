import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "./Overviewone.css"
import { FaDownload } from "react-icons/fa"
import { Button } from "react-bootstrap"

function OverviewOne() {
    return (
        <div className='ovocont'>
            <Container >
                <Row>
                    <Col>
                        <div>
                            <div className='ovoicon'>
                                <div className='ovoicondiv'>
                                    <FaDownload className='iconColor' />
                                </div>
                            </div>
                            <div className='headText'>
                                <p>1,25,000 Customers Using The Application!</p>
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
                    <Col>
                        <div>
                            <div className="ovoImg">
                                <img src={require("./phone1.jpg")} alt="none" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OverviewOne