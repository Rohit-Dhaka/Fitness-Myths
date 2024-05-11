import React from 'react'
import { Container } from 'react-bootstrap'
import { Instgram, Tiktok } from '../common/icon'
const Footer = () => {
  return (
    <footer className='bg-footer -mt-1'>
      <Container className=''>
        <div className='d-flex flex-column align-items-center pt-lg-152 pt-100' data-aos="fade-up">
          <h4 className='text-white fs-26 font-Eurostile fw-bold lh-33 mb-0'>Hypervive</h4>      
          <h6 className='text-white font-Manrope pt-19 fw-normal fs-14 lh-23  opacity-70 mb-0'>Connect with us on social media</h6>
          <div className="pt-17 pb-23 d-flex gap-10">
            <a href="https://apps.apple.com/us/app/tiktok/id835599320" target='_black' className='socal-media  d-flex justify-content-center align-items-center'>
            <Tiktok/>
            </a>
            <a href="https://www.instagram.com/" target='_black' className='socal-media d-flex justify-content-center align-items-center'>
              <Instgram/>
            </a>
          </div>
        </div>
      </Container>
      <h5 className='font-Manrope fw-normal fs-14 lh-23 pt-10 pb-10 text-white opacity-70 top-border text-center mb-0'>Copyright © 2024 HyperVive | All Rights Reserved.</h5>
    </footer>
  )
}
export default Footer