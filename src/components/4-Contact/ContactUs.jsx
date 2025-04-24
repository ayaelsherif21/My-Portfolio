import React from 'react'
import './ContactUs.css'
export default function ContactUs() {
  return (
    <div className="contact">
        <h2 className='contactTitle'>
        <span className='icon-envelope'></span>
        Contact Us
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, veritatis.</p>

        <div className="flex ">
          <form>
          <div className='flex'>
            <label htmlFor="email">Email Address:</label>
            <input placeholder="Your Email.." required type="email" name="" id="email" />
          </div>

          <div className='flex' style={{marginTop:"1.2rem"}}>
            <label htmlFor="message">Your Message: </label>
            <textarea placeholder="Tell me anthing you want.." style={{ marginLeft:"2.75rem"}} required rows={5} cols={10}  name="" id="message"></textarea>
          </div>
             <button  className="submit ">Submit</button>
           
          </form>
          <div className="animation"></div>
        </div>
    </div>
  )
}
