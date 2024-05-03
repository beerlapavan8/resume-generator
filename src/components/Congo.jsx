import React from 'react'
import { TypeAnimation } from 'react-type-animation';
const Congo = () => {
  const ColorChanging={
    paddingTop:"30px",
    color : "#FAD5A5",
    fontSize: "20px",
    display:"flex",
    // textAlignItems:"center",
    alignItems: "center",
    justifyContent: "center",
    
  }
  return (
    <div style={ColorChanging}>
      
      <TypeAnimation
      sequence={[
        
        'Thanks for Submitting Checkout another info',
        1100, 
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '5em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </div>
  )
}

export default Congo
