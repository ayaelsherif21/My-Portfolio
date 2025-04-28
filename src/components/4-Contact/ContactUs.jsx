import React from 'react'
import './ContactUs.css'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from '../../Animation/done.json'
import contactAnimation from '../../Animation/Contactus.json'

export default function ContactUs() {

  const [state, handleSubmit] = useForm("xldbdkee");
//   if (state.succeeded) {
//     return <p>Thanks for joining!</p>;
// }
  

  return (
    <div  className="contact">
        <h2 className='contactTitle'>
        <span className='icon-envelope'></span>
        Contact Us
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, veritatis.</p>

        <div style={{justifyContent:"space-between"}} className="flex ">
          <form onSubmit={handleSubmit}>
          <div className='flex'>
            <label htmlFor="email">Email Address:</label>
            <input placeholder="Your Email.." required type="email" name="email" id="email" />
            <ValidationError prefix="Email" field="email" errors={state.errors}/>
          </div>

          <div className='flex' style={{marginTop:"1.2rem"}}>
            <label htmlFor="message">Your Message: </label>
            <textarea placeholder="Send to me your Message.."  required rows={5} cols={10}  name="message" id="message"></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            /> 
          </div>
             <button type="submit" disabled={state.submitting} className="submit ">Submit</button>
             
             {(state.succeeded) && (<p style={{marginTop:"10px" ,fontSize:"1.3rem"}} className='flex'>
              <Lottie loop={false} style={{height:33}} animationData={doneAnimation} />
              We will back to you soon!</p>)}
           
          </form>
          <div className="animation">
          <Lottie className='contact-Animation'  animationData={contactAnimation} />
          </div>
        </div>
    </div>
  )
}
