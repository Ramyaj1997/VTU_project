import React from 'react';
 import {Carousel,Row,Col, Button} from 'react-bootstrap';
 import { Link } from 'react-router-dom';

const HomeScreen = () => {
    return(
        <>
      <div>
        <marquee> VTU Results 2024 out - Check Exam Results here!!!
            <Link to='/result/loginPage'>Cllick here...</Link>
            Best of Luck!!!</marquee>
      </div>
      <div>
      <Carousel>
  <Carousel.Item>
    <img height="550px"
      className="d-block w-100"
      src="Image/img1.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img  height="550px"
      className="d-block w-100"
      src="Image/img2.jpg"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img  height="550px"
      className="d-block w-100"
      src="Image/img3.jpg"
      alt="Third slide"
    />
 </Carousel.Item>

 <Carousel.Item>
    <img  height="550px"
      className="d-block w-100"
      src="Image/img4.jpg"
      alt="Third slide"
    />
 </Carousel.Item>

 <Carousel.Item>
    <img  height="550px"
      className="d-block w-100"
      src="Image/img5.jpg"
      alt="Third slide"
    />
 </Carousel.Item>
</Carousel>
<br/>
<div>
  <Row>
    <Col> <h3><Link to ="/about">Vision</Link></h3>
    <p className='p-style'>
    To become an outstanding Technological University at the cutting edge of Science and Technology 
    that produces world class Knowledge-delivery, Research,
     Extension and Leadership in Technology innovation for Industry and Society
      </p>
      <p  className='p-style'>
    To become an outstanding Technological University at the cutting edge of Science and Technology 
    that produces world class Knowledge-delivery, Research,
     Extension and Leadership in Technology innovation for Industry and Society
      </p>
      <Link to='/about' className='btn btn-warning'> Read More</Link>
      </Col>
      <Col> <h3><Link to ="/about">Mission</Link></h3>
    <p  className='p-style'>
    To become an outstanding Technological University at the cutting edge of Science and Technology 
    that produces world class Knowledge-delivery, Research,
     Extension and Leadership in Technology innovation for Industry and Society
      </p>
      <p  className='p-style'>
    To become an outstanding Technological University at the cutting edge of Science and Technology 
    that produces world class Knowledge-delivery, Research,
     Extension and Leadership in Technology innovation for Industry and Society
      </p>
      <Link to='/about' className='btn btn-warning'> Read More</Link>
      </Col>
      <Col> <h3><Link to ="/about">Mandate</Link></h3>
    <p  className='p-style'>
    To become an outstanding Technological University at the cutting edge of Science and Technology 
    that produces world class Knowledge-delivery, Research,
     Extension and Leadership in Technology innovation for Industry and Society
      </p>
      <p  className='p-style'>
    To become an outstanding Technological University at the cutting edge of Science and Technology 
    that produces world class Knowledge-delivery, Research,
     Extension and Leadership in Technology innovation for Industry and Society
      </p>
      <Link to='/about' className='btn btn-warning'> Read More</Link>
      </Col>
    
  </Row>

</div>
        </div> 
      </> 
    )

}
export default HomeScreen