import React from "react";
import "./banner.css";
import Container from 'react-bootstrap/Container';
// import Buttons from "../button/Buttons";
import { Button } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGooglePlay } from "@react-icons/all-files/fa/FaGooglePlay";
import { AiOutlineApple } from "@react-icons/all-files/ai/AiOutlineApple";

function Banner() {
    return (

        <div className="bgc">
            <Container >
                <Row className="contner1">
                    <Col >
                        <div className="cont-main" >
                            <div className="cont-heading">
                                <p>
                                    A Powerful App For Your Business.
                                </p>
                            </div>
                            <div className="cont-p">
                                <p>
                                    From open source to pro services, Piqes helps you to build, deploy, test, and monitor apps.
                                </p>
                            </div>
                            <div className="contBtnDiv" >
                                <div className="contBtn1" >
                                    <Button className="contBtns1"  ><AiOutlineApple /> app store</Button>
                                </div>
                                <div className="contBtn2" >
                                    <Button className="contBtns2"  >
                                    <FaGooglePlay />  google play</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col >
                        <div>
                            <div className="home-img">
                                <img src={require("./phone.jpg")} alt="none" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Banner;