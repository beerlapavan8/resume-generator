import React, { useState } from 'react';
import './Fillform.css';

const FillForm = ({ updateName }) => {
  // const [shouldShowComponent, setShouldShowComponent] = useState(false);
  // const handleProceed = e => {
  //   e.preventDefault();
  //   setShouldShowComponent(true);
  // };
  const [name1,setname2]=useState({
    fname:"",
    lname:"",
    cname:"",
    cgpa:0,
    branch:"",
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
    updateName(name1);
  }

  return (
    <div className='formsection' >
      {/* {!shouldShowComponent &&( */}
      <form onSubmit={printing}>
        <input placeholder='FullName' className='inputclass' name ="fname" onChange={handleChange2} value={name1.fname}/>
        <br/>
            <br/>
            {/* <input placeholder='LastName'   className='inputclass' name ="lname" onChange={handleChange2} value={name1.lname} />
             <br/> */}
             <br/>
             <input placeholder='CollegeName'  className='inputclass'  name ="cname" onChange={handleChange2} value={name1.cname} />
             <br/>
             <br/>
             <input placeholder='Cgpa'  className='inputclass' name ="cgpa" onChange={handleChange2} value={name1.cgpa} />
             <br/>
             <br/>
             <input placeholder='branch'  className='inputclass' name ="branch" onChange={handleChange2} value={name1.branch}/>
             <br/>
             <br/>
             <input placeholder='email'  className='inputclass' name ="email" onChange={handleChange2} value={name1.email}/>
             <br/>

        <button type='submit' 
        // onClick={handleProceed}
         >Submit</button>
      </form>
    
      {/* {shouldShowComponent && <Congo/>} */}
    </div>
  );
};

export default FillForm;



// import React, { useState } from 'react';
// import './Fillform.css';

// const FillForm = ({ updateName }) => {
//   const [name, setName] = useState("");
//   // const [name1,setname2]=useState({
//   //   namee:"",
    
//   // });

//   // function handleChange2(event)
//   // {
//   //   //  const xx = ;
//   //    setname2({
//   //     [namee]:event.target.value,
//   //    });
//   // }

//   function handleChange(event) {
//     setName(event.target.value);
//   }

//   function printing(event) {
//     event.preventDefault(); 
//     updateName(name);
//   }

//   return (
//     <div className='formsection' >
//       <form onSubmit={printing}>
//         <input placeholder='FullName' className='inputclass' onChange={handleChange} value={name}/>
//         <br/>
//             <br/>
//             <input placeholder='LastName'   className='inputclass'/>
//              <br/>
//              <br/>
//              <input placeholder='CollegeName'  className='inputclass' />
//              <br/>
//              <br/>
//              <input placeholder= 'email'   className='inputclass'/>
//              <br/>
//              <br/>
//              <input placeholder='contact'   className='inputclass'/>
//              <br />
//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default FillForm;
