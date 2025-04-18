import React from 'react'
import './Hero.css'
export default function Hero() {
  return (
    <section className='hero flex'>
      <div className="left-bx">
        <div className="image flex">
          <img src="./Aya.png" alt="" />
          <span className="icon-verified"></span>
        </div>
        <div className="title">
          <h1>Hi, I'm Aya Mohamed</h1>
          <p className='subTitle'> A passionate <strong>Frontend Developer</strong> specializing in <strong>React.js</strong>,  
              I build responsive, user-friendly web applications 
              I love turning ideas into clean, efficient code with modern tools like   
              <strong> Next.js, Redux, and Tailwind CSS</strong>. 
              Let's build something amazing together!</p>
       </div>
       <div className="socialMedia flex 2x">
        <div className="icons icon-linkedin-square"></div>
        <div className="icons icon-github"></div>
        <div className="icons icon-x"></div>
        <div className="icons icon-instagram"></div>
        <div className="icons icon-facebook"></div>
       </div>
      </div>
      <div className="right-box animation">animation</div>
    </section>
  )
}
