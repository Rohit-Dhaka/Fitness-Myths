import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Man from '../assets/images/men.webp'
import Ipad from '../assets/images/Ipad.webp'
import Group4 from '../assets/images/Group4.webp'
import Group2 from '../assets/images/Group2.webp'
import Icon from "../assets/images/icon.webp"
import { Instgramicon } from '../common/icon'


const Fifthsection = () => {
    return (
        <section className='background-black position-relative '>
            <div className=" position-absolute group4">
                <img src={Group4} alt="" />
            </div>
            <div className=" position-absolute group2">
                <img src={Group2} alt="" />
            </div>
            <Container className='max-w-1200'>
                <Row className='pt-lg-115 pt-sm-100 pt-60 align-items-end justify-content-between '>
                    <div className="col-lg-6 col-12 position-relative d-flex justify-content-lg-start justify-content-center">

                        <img src={Man} alt="" className=' w-100 max-w-539 mx-auto' />
                        <div className=" position-absolute icon">
                            <img src={Icon} alt="" className=' d-lg-block d-none' />
                        </div>

                    </div>
                    <div className="col-lg-5 col-12 pt-lg-0 pt-sm-5 pt-4">
                        <h3 className='font-Eurostile fw-bold fs-30 lh-37 text-white mb-0'>About the <span className="color-yellow">Author</span></h3>
                        <h6 className='font-Manrope fw-normal fs-18 lh-28 white-smoke mb-0 pt-14'>Francesco is a Pro fitness coach currently working as head of Sport Science for Toronto FC Academy. He is a registered nutritionist, certified strength and conditioning specialist, holds a Master’s in exercise science and is a national level soccer coach.</h6>
                        <h6 className='font-Manrope fw-normal fs-18 lh-28 white-smoke mb-0 pt-10'>He has been a personal performance coach to a 1000+ elite level footballers ranging from youth internationals all the way to top level pro’s</h6>
                        <h6 className='font-Manrope fw-normal fs-18 lh-28 white-smoke mb-0 pt-10'>Francesco believes every footballer should have access to a rock-solid S&C program alongside a quality nutrition plan to improve the chances of crushing their genetic athletic potential and becoming the best version of themselves.</h6>
                        <div className='pt-30 d-flex gap-17'>
                            <a href="https://www.instagram.com/" target='_black'>
                                <Instgramicon />

                            </a>

                            <a href="https://www.instagram.com/" target='_black' className='font-Eurostile fw-bold fs-26 lh-33 text-white text-decoration-none '>Hypervive</a>

                        </div>
                    </div>
                </Row>
                <div className="pt-lg-312 pt-sm-100 pt-60 mx-xl-0 mx-3 d- none">
                    <Row className=' yellow-box position-relative flex-wrap-reverse '>
                        <div className="col-lg-6 col-12">
                            <h4 className='font-Eurostile  fw-bold fs-45 lh-59 text-black mb-0 max-w-lg-520 text-capitalize'>7 Fitness Myths to Avoid</h4>
                            <h5 className='font-Manrope fw-normal fs-18 lh-28 pt-10 mb-0 pb-32'>Grab your free copy now!</h5>
                            <div className='border-black  d-inline-block '><button className='download-btn text-white font-Eurostile fw-bold fs-16 lh-16 border-0'>Download For Free</button></div>
                        </div>
                        <div className="col-lg-6 col-12 d-flex justify-content-lg-end  justify-content-center">
                            <div className="  ipat-img">
                                <img src={Ipad} alt="" className='w-100' />

                            </div>
                        </div>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Fifthsection