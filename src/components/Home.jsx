import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import photo1 from '../assests/office.jpg'
import './Home.css'
const Home = () => {
  const ColorChanging={
    paddingTop:"30px",
    color : "#FAD5A5",
    fontSize: "70px",
    display:"flex",
    // textAlignItems:"center",
    alignItems: "center",
    justifyContent: "center",
    
  }
  return (
    <div >
    <div style={ColorChanging} >
    <TypeAnimation
      sequence={[
        
        'Resume Generator..!',
        1100, 
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </div>
    <div className='container1'>
    <img src={photo1} alt="" />
      <p style={{color:"#FAD5A5"}}>A well-crafted resume is more than just a document; it's your professional story condensed into a few pages, showcasing your skills, experiences, and qualifications. In today's competitive job market, a resume plays a crucial role in making a strong first impression on potential employers. It serves as a marketing tool that highlights your strengths, achievements, and career progression, helping you stand out from other candidates vying for the same position. A carefully tailored resume not only reflects your professionalism but also demonstrates your attention to detail and communication skills. It is often the first point of contact between you and a prospective employer, influencing their decision to consider you for an interview. Therefore, investing time and effort in creating a polished and impactful resume is essential for effectively representing your career journey and landing opportunities that align with your aspirations and goals.  </p>
      </div>
    </div>
  )
}

export default Home
