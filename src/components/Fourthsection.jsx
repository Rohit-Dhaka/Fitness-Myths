import React from 'react'
import { Container, Row } from 'react-bootstrap'

import Eebook from '../assets/images/eBook.webp'
const Fourthsection = () => {
  return (
    <section className='bg-yellow-img'>
        <Container className='max-w-1107'>
            <Row className='pt-49 pb-50 align-items-center flex-wrap-reverse'>
                <div className="col-lg-8 col-md-6 pt-lg-0 pt-sm-5 pt-4">
                    <h2 className='mb-0 font-Eurostile fw-bold fs-30 lh-49 text-black text-capitalize'>With the right knowledge maintaining and improving your fitness becomes effortless and enjoyable. Stop wasting time you don’t have!</h2>
                </div>
                <div className="col-lg-4 col-md-6 d-flex justify-content-lg-end justify-content-center">
                    <div className="eBook">
                    <img src={Eebook} alt="" className='w-100 ' />

                    </div>
                </div>
            </Row>
        </Container>
    </section>
  )
}

export default Fourthsection