import React, { useState } from 'react';
import './Fillform.css';
// import { ToastContainer, toast } from 'react-toastify';
// import Congo2 from './Congo2';

const Info = ({ updateName3 }) => {

  // const [shouldShowComponent, setShouldShowComponent] = useState(false);
  // const handleProceed = e => {
  //   e.preventDefault();
  //   setShouldShowComponent(true);
  // };
  const [name1,setname2]=useState({
    certf1:"",
    certf2:"",
    tss:"",
    cgpa:0,
    lt:"",
    email:"",
  });
console.log(name1);
  function handleChange2(event)
  {
   const {name,value}=event.target;
     setname2((prevState)=>({ 
      ...prevState,
      [name]:value
     }))
  }
  function printing(event) {
   
    event.preventDefault(); 
    updateName3(name1);
  }

  return (
    <div className='formsection' >
      {/* {!shouldShowComponent &&( */}
      <form onSubmit={printing}>
     
      <textarea
        placeholder='Certifications-1'
        className='inputclass'
        name='certf1'
        onChange={handleChange2}
        value={name1.certf1}
      /> 
    <br />
    <br /> 
    <textarea
        placeholder='Certifications-2'
        className='inputclass'
        name='certf2'
        onChange={handleChange2}
        value={name1.certf2}
      /> 
    <br />
    <br />
    <textarea
        placeholder='Programming Languages'
        className='inputclass'
        name='tss'
        onChange={handleChange2}
        value={name1.tss}
      />
      <br />
      <br />
      <textarea
        placeholder='Libraries and Tools'
        className='inputclass'
        name='lt'
        onChange={handleChange2}
        value={name1.lt}
      />
        <button type='submit' 
        
        >Submit</button>
      </form>
    
    
    {/* <ToastContainer />
      {shouldShowComponent && <Congo2/>} */}
    </div>
  );
};

export default Info;