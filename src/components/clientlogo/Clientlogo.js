import React from 'react'
import "./Clientlogo.css"
import {Container ,Row ,Col} from 'react-bootstrap';
import {pageBulb} from '../../assets/images'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import {graygrids} from "../../assets/images"
import{lineicons} from "../../assets/images"





function Clientlogo() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
        <div className='Clientlogo'>
              <Container>
                   <Row > 
                    <Col  >
                        <Carousel  
                            swipeable={false}
                            draggable={false}
                            showDots={false}
                            responsive={responsive}
                            arrows={false}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={4000}
                            keyBoardControl={true}
                            containerClass="carousel-container"
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                            >
                            <div  ><img src={lineicons} alt="lineicons"  className='clienImg'/> </div>
                            <div ><img src={graygrids} alt="graygrids" className='clienImg' /></div>
                            <div  ><img src={pageBulb} alt="pageBulb" className='clienImg' /></div>
                            <div> <img src={lineicons} alt="lineicons" className='clienImg' /></div>
                            <div><img src={graygrids} alt="graygrids" className='clienImg' /></div>
                            <div><img src={lineicons} alt="lineicons" className='clienImg' /> </div>
                            <div><img src={graygrids} alt="graygrids" className='clienImg' /></div>
                            <div><img src={pageBulb} alt="pageBulb" className='clienImg' /></div>
                            <div><img src={lineicons} alt="lineicons" className='clienImg' /></div>
                            <div><img src={graygrids} alt="graygrids" className='clienImg' /></div>
                            <div><img src={lineicons} alt="lineicons" className='clienImg' /> </div>
                            <div><img src={graygrids} alt="graygrids" className='clienImg'/></div>
                            <div><img src={pageBulb} alt="pageBulb" className='clienImg' /></div>
                            <div><img src={lineicons} alt="lineicons" className='clienImg' /></div>
                            <div><img src={graygrids} alt="graygrids" className='clienImg' /></div>
                
                        </Carousel>
                        </Col>
                </Row> 

            </Container>
        </div>
    )
}

export default Clientlogo