import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Features.css"


function Features() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className='featContent'>
                            <div className='header'>
                            </div>
                            <div className="headTeaxt1">
                                <p className='pTeaxt'>
                                    FEATURES
                                </p>
                            </div>
                            <div className="headTeaxt2">
                                <p>
                                    Your Experience Gets Better And Better Over Time.
                                </p>
                            </div>
                            <div className="headTeaxt3">
                                <p>
                                There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}

export default Features