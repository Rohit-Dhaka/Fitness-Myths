import React, { useEffect } from 'react'
import '../src/App.css'
import Hero from './components/Hero'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Second from './components/Second';
import Thiredsection from './components/Thiredsection';
import Fourthsection from './components/Fourthsection';
import Fifthsection from './components/Fifthsection';


const App = () => {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 500,
      }
    );
  }, [])
  return (
    <>
    <Hero/>
    <Second/>
    <Thiredsection/>
    <Fourthsection/>
    <Fifthsection/>
    <Footer/>
    </>
  )
}

export default App