import React, { useState } from 'react'
import './Projects.css'
import { myProjects } from './myProjects'



export default function Projects() {

  const [currActive, setcurrActive] = useState("all")
  const [Arr, setArr] = useState(myProjects)
  const handleClick = (buttonCategory) => {
    setcurrActive(buttonCategory);
    const newArr =myProjects.filter((item) => { 
        const myCategory = item.category.find((myItem) => { 
          return myItem === buttonCategory
  ;
        })
      return myCategory === buttonCategory
     })
    setArr(newArr)
  }
  return (
    <main className='flex'>
      <section className='flex left-section'>
        <button onClick={()=>{
            setcurrActive("all");
            setArr(myProjects)
        }} className={currActive === "all"? 'active' :null}>All Projects</button>

        <button onClick={()=>{
          handleClick("css")
        }} className={currActive === "css"? 'active' :null}>
          HTML/CSS
        </button>

        <button onClick={()=>{
          handleClick("js")
        }} className={currActive=== "js" ?'active' : null}>JavaScript</button>

        <button onClick={()=>{
         handleClick("react")
        }} className={currActive === "react" ? 'active' :null}>React</button>
      </section>

      <section className='right-section flex'>
        {Arr.map((item)=>{
          return(  
          <article key={item.imgPath} className="card">
            <img width={273} src={item.imgPath} alt="" />
            <div style={{width:"240px"}} className="box">
              <h3 className="card-title">{item.projectTitle}</h3>
              <p className='cardsub-title'>{item.details}</p>
              <div className="icons flex">
            <div style={{gap:"11px"}} className='flex'>
            <a href={item.link} className="icons icon-link"></a>
            <a href={item.github} className="icons icon-github"></a>
            </div>
              {/* <a className='cardLink flex' href=""> More
                <span style={{alignSelf:"end"}} className="icons icon-arrow-right"></span>
              </a> */}
              </div>
            </div>
          </article>)

        })}
        
      </section>
    </main>
  )
}
