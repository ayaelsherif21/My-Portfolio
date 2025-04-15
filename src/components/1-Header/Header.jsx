import React, { useState } from 'react'
import './Header.css';

export default function Header() {
  const [showModel, setshowModel] = useState(false)
  return (
    <header className='flex'>
      <button onClick={() => {  
        setshowModel(true);
      }} className='icon-menu navmenu flex'/>
      <nav>
      <ul className='flex'>
        <li><a href="About">About</a></li>
        <li><a href="Articles">Articles</a></li>
        <li><a href="Projects">Projects</a></li>
        <li><a href="Speaking">Speaking</a></li>
        <li><a href="Contact">Contact</a></li>
      </ul>
      </nav>
      <button className='mode flex'>
        <span className='icon-moon-stars'></span>
      </button>
        
     

     {showModel &&(
      <div className="fixed">
      <ul className='model'>
        <li><button className='icon-clear' onClick={() => { setshowModel(false) }}/></li>
        <li><a href="About">About</a></li>
        <li><a href="Articles">Articles</a></li>
        <li><a href="Projects">Projects</a></li>
        <li><a href="Speaking">Speaking</a></li>
        <li><a href="Contact">Contact</a></li>
      </ul>
      </div>
     )}
    </header>
  )
}
