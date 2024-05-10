import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image1 from '../assets/images/firstebook.webp'

const Hero = () => {
  return (
    <header className='hero-background'>
      <nav className='pt-13 pb-13' data-aos="fade-down">
        <Container className='max-w-1100'>
          <div className="w-100 d-flex justify-content-end">
          <div className='border-yellow  d-inline-block '><button className='Get-in-btn text-black font-Eurostile fw-bold fs-14 lh-14 border-0'>GET IN TOUCH</button></div>
          </div>
        </Container>

        
      </nav>
      <Container className='max-w-1100'>
        <Row className='align-items-center pb-96 pt-lg-109 pt-5 flex-wrap-reverse '>
          <div className="col-lg-8 col-md-6 col-12 pt-sm-5 pt-4 pt-lg-0">
            <h1 className='font-Eurostile fw-bold fs-45 lh-59 text-white mb-0  max-w-671'>Get the eBook That Reveals The <span className='color-yellow'>7 Fitness Myths</span> That Are Holding You Back From Experiencing Top-Level Fitness </h1>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div><img src={Image1} alt="img" className=' w-100' /></div>
          </div>
        </Row>
      </Container>
    </header>
  )
}
export default Hero