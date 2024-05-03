
import React, { useRef, useState } from 'react';
import './Resume.css';
import html2pdf from 'html2pdf.js'; // Import html2pdf
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Resume2 = (props) => {
  const notify = () => toast("Your pdf is downloading...!");
  const lastname = 'Doe';
  const ref = useRef();
  const [showButton, setShowButton] = useState(true);

  const handleDownload = () => {
    setShowButton(false);

    if (ref.current) {
      const opt = {
        margin: 0.5,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      };
      html2pdf().set(opt).from(ref.current).save().then(() => {
        setShowButton(true);
      });
    }
  };

  return (
    <div className="resume-container" ref={ref}>
      <div className="resume">
        <div className="centered">
          <h1 className="resume-heading">{props.name.fname}</h1>
          {/* <h2 className="resume-subheading">{lastname}</h2> */}
          <p className="resume-email">{props.name.email}</p>
        </div>

        <div className="section">
          <h3 className="resume-section">Education:-</h3>
          <p className="resume-detail">{props.name.cname}</p>
          <p className="resume-detail">{props.name.branch}</p>
          <p className="resume-detail">CGPA: {props.name.cgpa}</p>
        </div>
        <hr />

        <div className="section">
          <h3 className="resume-section">Projects:-</h3>
          <ul className="resume-list">
            <li>{props.name1.pr1}</li>
            <p className="resume-detail">{props.name1.prd1}</p>
            <li>{props.name1.pr2}</li>
            <p className="resume-detail">{props.name1.prd2}</p>
          </ul>
        </div>
        <hr />

        <div className="section">
          <h3 className="resume-section">Publications:-</h3>
          <ul className="resume-list">
            <li className="resume-detail">{props.name1.pub}</li>
          </ul>
        </div>
        <hr />

        <div className="section">
          <h3 className="resume-section">Internship:-</h3>
          <p className="resume-detail">{props.name1.intern}</p>
        </div>
        <hr />

        <div className="section">
          <h3 className="resume-section">Certifications:-</h3>
          <ul className="resume-list">
            <li className="resume-detail">{props.name3.certf1}</li>
            <li className="resume-detail">{props.name3.certf2}</li>
          </ul>
        </div>
        <hr />

        <div className="section">
          <h3 className="resume-section">Skills:-</h3>
          <p className="resume-detail">Programming Languages: {props.name3.tss}</p>
          <p className="resume-detail">Libraries and Tools: {props.name3.lt}</p>
        </div>
        <hr />

        <div className="section">
          <h3 className="resume-section">Hobbies:-</h3>
          <ul className="resume-list">
            <li className="resume-detail">{props.name1.hob1}</li>
            <li className="resume-detail">{props.name1.hob2}</li>
           
          </ul>
        </div>
      </div>
      {/* {showButton && <button onClick={handleDownload} className="resume-button">Download PDF</button>} */}
      {showButton && <button onClick={() => { handleDownload(); notify(); }} className="resume-button">Download PDF</button>}
      <ToastContainer />
    </div>
  );
};

export default Resume2;
