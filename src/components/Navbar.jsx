import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul>
            <li><Link style={{color:"#FAD5A5",textDecoration:"none",fontSize:"30px"}} to="/">Home</Link></li>
            <li><Link style={{color:"#FAD5A5",textDecoration:"none",fontSize:"30px"}} to="/about">Info-1</Link> </li>
            <li><Link style={{color:"#FAD5A5", textDecoration:"none",fontSize:"30px"}} to="/form" >Info-2</Link></li>
            <li><Link style={{color:"#FAD5A5", textDecoration:"none",fontSize:"30px"}} to="/info">Info-3</Link> </li>
            <li><Link style={{color:"#FAD5A5", textDecoration:"none",fontSize:"30px"}} to="/resume">Resume</Link> </li>
            {/* <li><Link style={{color:"#FAD5A5", textDecoration:"none",fontSize:"30px"}} to="/test">Test</Link> </li> */}
            {/* <li><Link style={{color:"#FAD5A5", textDecoration:"none",fontSize:"30px"}} to="/resume2">Resume2</Link> </li> */}
            
            {/* <li><Link to="/contact">Contact</Link> </li> */}

        </ul>
    </nav>
  )
}

export default Navbar
