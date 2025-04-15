import { useState } from 'react'
import Header from './components/1-Header/Header'
import Hero from './components/2-Hero/Hero'
import Projects from './components/3-Projects/Projects'
import ContactUs from './components/4-Contact/ContactUs'
import Footer from './components/5-Footer/Footer'


function App() {

  return (
    <>
    <div className="container">
      <Header/>
      <Hero/>
      <div className="divider"/>
      <Projects/>
      <div className="divider"/>
      <ContactUs/>
      <div className="divider"/>
      <Footer/>
      </div>
    </>
  )
}

export default App
