import React from 'react'
import CardContent from './CardContent'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Card.css"
import { IoMdCloudUpload } from "@react-icons/all-files/io/IoMdCloudUpload"
import { FaLock, FaSyncAlt, FaShieldAlt, FaDatabase, FaGlobe } from "react-icons/fa"



function Card() {

// const carddetails = [{ title:"Push to Deploy" , 
//                         text: "It is a long established fact that a reader will be distracted by the readable content of a page at its layout."},
                    
//                      { title:"SSL Certificates" , 
//                     text:"It is a long established fact that a reader will be distracted by the readable content of a page at its layout."},
//                     {
//                         title:"Simple Queues" ,
//                         text:"It is a long established fact that a reader will be distracted by the readable content of a page at its layout."
//                     },
//                     {
//                         title:"Advanced Security",
//                         text:"It is a long established fact that a reader will be distracted by  the readable content of a page at its layout."
//                     },
//                     {
//                         title:"Powerful API" ,
//                         text:"It is a long established fact that a reader will be distracted by  the readable content of a page at its layout."
//                     },
                    
//                 {
//                     title:"Database Backups",
//                     text:"It is a long established fact that a reader will be distracted by the readable content of a page at its layout."
//                 }
//                     ]


    return (
        <div>   
            <Container className='cardContainer'>
                <Row className='cardRow'>
                    <Col  >
                    {/* <{Card.data.cardmap((if))} */}
                        <CardContent
                            icons={<IoMdCloudUpload size={60} style={{ color:"#ff6b81"}} />}
                            title="Push to Deploy"
                            text="It is a long established fact that a reader will be distracted by 
                        the readable content of a page at its layout." />
                    </Col>
                    <Col>
                        <CardContent icons={<FaLock size={60} style={{ color:"#ff6b81"}} />} title="SSL Certificates" text="It is a long established fact that a reader will be distracted by 
                                                                the readable content of a page at its layout."/>
                    </Col><Col>
                        <CardContent icons={<FaSyncAlt size={60} style={{ color:"#ff6b81"}} />} title="Simple Queues" text="It is a long established fact that a reader will be distracted by 
                                                                the readable content of a page at its layout."  />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardContent icons={<FaShieldAlt size={60}  style={{ color:"#ff6b81"}} />} title="Advanced Security" text="It is a long established fact that a reader will be distracted by 
                                                                the readable content of a page at its layout." />
                    </Col><Col>
                        <CardContent icons={<FaDatabase size={60} style={{ color:"#ff6b81"}} />} title="Powerful API" text="It is a long established fact that a reader will be distracted by 
                                                                the readable content of a page at its layout." />
                    </Col><Col>
                        <CardContent icons={<FaGlobe size={60}  style={{ color:"#ff6b81"}}/>} title="Database Backups" text="It is a long established fact that a reader will be distracted by 
                                                                the readable content of a page at its layout." />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Card