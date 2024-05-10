import React from 'react'
import Hero from './components/Hero'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Second from './components/Second';
import Thiredsection from './components/Thiredsection';
import Fourthsection from './components/Fourthsection';
import Fifthsection from './components/Fifthsection';


const App = () => {
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