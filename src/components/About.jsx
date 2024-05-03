

import React, { useState } from 'react';
import './about.css';

const About = ({ updateName1 }) => {
  
  const [name1,setname2]=useState({
    pr1:"",     
    prd1:"",
    pr2:"",
    prd2:"",
    pub:"",
    intern:"",
    hob1:"",
    hob2:"",
    hob3:""
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
    updateName1(name1);
  }

  function onSubmitting(event)
  {
    event.preventDefault();
    printing();
  }
  return (
    <div className='formsection' >
      <form onSubmit={printing}>
        <input placeholder='ProjectName-1' className='inputclass' name ="pr1" onChange={handleChange2} value={name1.pr1}/>
        <br/>
            <br/>
            <textarea
        placeholder='ProjectDescription'
        className='inputclass'
        name='prd1'
        onChange={handleChange2}
        value={name1.prd1}
      />  
             <br/>
             <br/>
             <input placeholder='ProjectName-2' className='inputclass' name ="pr2" onChange={handleChange2} value={name1.pr2}/>
        <br/>
            <br/>
            <textarea
        placeholder='ProjectDescription'
        className='inputclass'
        name='prd2'
        onChange={handleChange2}
        value={name1.prd2}
      />  
           <br/>
             <br/>
             <textarea
        placeholder='Publications'
        className='inputclass'
        name='pub'
        onChange={handleChange2}
        value={name1.pub}
      />
       <br/>
       <br/>
             <input placeholder='Interships' className='inputclass' name ="intern" onChange={handleChange2} value={name1.intern}/>
          <br />
          <br />

          <textarea
        placeholder='Hobbies-1'
        className='inputclass'
        name='hob1'
        onChange={handleChange2}
        value={name1.hob1}
      /> 
    <br />
          <br />

          <textarea
        placeholder='Hobbies-2'
        className='inputclass'
        name='hob2'
        onChange={handleChange2}
        value={name1.hob2}
      /> 
      <br />
          <br />
        <button type='submit' 
        
         >Submit</button>
      </form>
     
    </div>
  );
};

export default About;
