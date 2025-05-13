import React from 'react'
import './Hero.css'
import Lottie from "lottie-react";
import developerAnimation from '../../Animation/developer.json'
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
          <h3>Front End Developer</h3>
          <p className='subTitle'> A passionate <strong>Frontend Developer</strong> specializing in <strong>React.js</strong>,  
              I build responsive, user-friendly web applications 
              I love turning ideas into clean, efficient code with modern tools.  
              Let's build something amazing together!</p>
       </div>
       <div className="socialMedia flex 2x">
        <a href='https://www.linkedin.com/in/aya-mohamed-73a539234/' className="icons icon-linkedin-square"></a>
        <a href='https://github.com/ayaelsherif21' className="icons icon-github"></a>
        <a href='https://x.com/AyaElsherif_' className="icons icon-x"></a>
        <a href='https://www.instagram.com/ayamohamed_1d/' className="icons icon-instagram"></a>
        <a href='https://www.facebook.com/profile.php?id=100003965799380' className="icons icon-facebook"></a>
       </div>
      </div>
      <div className="right-box animation">
        <Lottie className='developer-Animation' animationData={developerAnimation} />
      </div>
    </section>
  )
}
