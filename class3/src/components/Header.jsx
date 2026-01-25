import React from 'react'
import "./Header.css"
import image from "../assets/61csokWq+kL.jpg"

const Header = () => {
  return (
   <>
    <div className='navbar'>
        <div className='logo'>
            <img src={image} alt="" width="40px" className='image'/>
        </div>
        <div className='nav'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
   </>
  )
}

export default Header