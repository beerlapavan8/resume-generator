


import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const Contact = (props) => {
 

  const handleDownload = () => {
    const pdfContent = document.getElementById('pdfContent');

    html2canvas(pdfContent).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('download.pdf');
    });
  }
  return (
    <div id="pdfContent">
      <h1>Contact Page</h1>
      {/* Example of accessing and displaying a prop */}
      <p>Your name: {props.name.fname}</p>
      <p>Your name: {props.name.lname}</p>
      <p>Your name: {props.name.cname}</p>
      <p>Your name: {props.name.email}</p>
      <p>Your name: {props.name.cgpa}</p>
      <p>Your name: {props.name.branch}</p>
      <p>Your name: {props.name1.pr1}</p>
      <p>Your name: {props.name1.pr2}</p>
      <p>Your name: {props.name1.prd1}</p>
      <p>Your name: {props.name1.prd1}</p>
      <p>Your name: {props.name1.pub}</p>
      <p>Your name: {props.name3.tss}</p>
      {/* Other content using props */}
      <button onClick={handleDownload}>Download as PDF</button>
    </div>
  );
};

export default Contact;
