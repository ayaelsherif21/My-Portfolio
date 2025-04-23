import React from 'react'
import './Projects.css'

export default function Projects() {
  return (
    <main className='flex'>
      <section className='flex left-section'>
        <button className='active'>All Projects</button>
        <button>HTML/CSS</button>
        <button>JavaScript</button>
        <button>React</button>
      </section>
      <section className='right-section flex'>
        {["aa" , "bb" , "cc" , "dd" , "ee" , "ff"].map((item)=>{
          return(  
          <article className="card">
            <img width={273} src="./1.jpg" alt="" />
            <div style={{width:"240px"}} className="box">
              <h3 className="card-title">SpaceZone</h3>
              <p className='cardsub-title'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, repudiandae veniam. Aperiam nam quidem amet?</p>
              <div className="icons flex">
            <div style={{gap:"11px"}} className='flex'>
            <div className="icons icon-link"></div>
            <div className="icons icon-github"></div>
            </div>
              <a className='cardLink flex' href=""> More
                <span style={{alignSelf:"end"}} className="icons icon-arrow-right"></span>
              </a>
              </div>
            </div>
          </article>)

        })}
        
      </section>
    </main>
  )
}
