import React, { useState } from 'react';
import './Fillform.css';
import { ToastContainer, toast } from 'react-toastify';
import Congo2 from './Congo2';

const Resume3 = ({ updateName3 }) => {

  const [shouldShowComponent, setShouldShowComponent] = useState(false);

  const [name1, setname2] = useState({
    certf1: "",
    certf2: "",
    tss: "",
    cgpa: 0,
    lt: "",
    email: "",
  });

  console.log("name1:", name1);

  const handleChange2 = (event) => {
    const { name, value } = event.target;
    setname2((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleProceed = (e) => {
    e.preventDefault();
    console.log("handleProceed called");
    setShouldShowComponent(true);
  };

  const printing = (event) => {
    event.preventDefault();
    console.log("printing called");
    updateName3(name1);
    handleProceed(event); 
  };

  console.log("shouldShowComponent:", shouldShowComponent);

  return (
    <div className='formsection'>
      {!shouldShowComponent && (
        <form onSubmit={printing}>
          {/* Your textareas and input fields */}
          <button type='submit'>Submit</button>
        </form>
      )}
      <ToastContainer />
      {shouldShowComponent && <Congo2 />}
    </div>
  );
};

export default Resume3;
