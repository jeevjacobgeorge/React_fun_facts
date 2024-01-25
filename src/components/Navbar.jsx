import React from 'react'
import react_logo from '../assets/react.svg'
export const Navbar = () => {
  return (
    <>
        <header>
            <div className="logo">
                <img src={react_logo}></img>
                <h2>React Facts</h2>
            </div>
            <div>
               <h3>React Course-Project 1</h3>
            </div>
            
        </header>
    </>
  )
}
export default Navbar
