import React from 'react';
import './Resume.css'; 

const Resume2 = ( props) => {
  const lastname = 'Doe';
  return (
    <div className="resume-container">
      <div className="resume">
        <div className="centered">
          <h1 className="resume-heading">{props.name.fname}</h1>
          <h2 className="resume-subheading">{lastname}</h2>
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
            {/* {hobbies.map((hobby, index) => (
              <li className="resume-detail" key={index}>{hobby}</li>
            ))} */}
            <li className="resume-detail" >{props.name1.hob1}</li>
            <li className="resume-detail" >{props.name1.hob2}</li>
            <li className="resume-detail" >{props.name1.hob3}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume2;
