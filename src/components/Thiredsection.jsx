import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Laptop from '../assets/images/laptop.webp'
import Group1 from "../assets/images/Group1.webp"

const Thiredsection = () => {
    return (
        <section className='background-black position-relative -mt-1'>
            <div className=" position-absolute  Group1">
                <img src={Group1} alt="group" />
            </div>
            <Container  className='max-w-1147'>
                <Row className='pb-lg-168 pb-sm-100 pb-60 align-items-center'>
                    <div className="col-md-6 col-12 position-relative z-1 d-flex justify-content-md-start justify-content-center">
                        
                            <div className="Ellipse2 position-absolute  z-n1 "></div>
                        
                        <img src={Laptop} alt="laptop" className=' w-100  max-w-530' />
                    </div>
                    <div className="col-md-6 col-12 d-flex justify-content-md-end justify-content-center pt-sm-5 pt-4 pt-lg-0">
                        <div className="d-flex  flex-column ">
                            <h2 className='font-Eurostile fw-bold fs-30 lh-37 text-white mb-0 text-capitalize max-w-522 text-md-start text-center'>Let me know where <span className="color-yellow">you want me to send it</span></h2>
                            <form className='pt-29' >
                                <div className="">
                                    <input type="text" placeholder='Name' className='font-Manrope w-100 max-w-522 fw-normal fs-16 lh-21  outline-none text-white input-box' />
                                </div>
                                <div className=" mt-13">
                                    <input type="email" placeholder='Email' className='font-Manrope w-100 max-w-522 fw-normal fs-16 lh-21 outline-none text-white input-box' />
                                </div>
                            </form>
                            <div className="pt-5 d-flex justify-content-md-start justify-content-center">
                            <div className='border-yellow  d-inline-block  position-relative'>
                                <button className='Get-in-btn text-black font-Eurostile fw-bold fs-14 lh-14 '>Send It Here!</button>
                                <div className="black-line position-absolute"></div>
                                </div>
                            </div>
                        
                        </div>

                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Thiredsection