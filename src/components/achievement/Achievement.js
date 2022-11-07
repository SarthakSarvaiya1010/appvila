import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Achievement.css"




function Achievement() {
    return (
        <div className='achievement'>
            <Container>
                <Row>
                    <Col>
                        <div className='achHead' >
                            <div className='achTital' >
                                <p>Trusted by developers from over 80 planets</p>
                            </div>
                            <div>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row  className='achRow' >
                    <Col  xs={2}  >
                        <div >
                        <div  className='achText' >
                            <h3 className='achTital'> 100% </h3>
                            <p>
                                Satisfaction
                            </p>
                        </div>
                    
                    </div>
                    </Col>
                    <Col xs={2} >
                        <div >
                            <div className='achText'> 
                            <h3 className='achTital'> 120K</h3>
                            <p>
                                Happy Users
                            </p></div>
                            <div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={1}  >
                        <div  className='achText'>
                            <div >
                            <h3 className='achTital'>  125k+
                            </h3>
                            <p>
                                Downloads
                                </p>
                            </div>
            
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Achievement