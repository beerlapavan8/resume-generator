
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

import About from './components/About';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import FillForm from './components/FillForm';
import Info from './components/Info';
import Resume from './components/Resume';
import Resume2 from './components/Resume2';
import Resume3 from './components/Resume3';

function App() {
  const [name, setName] = useState("");


  const updateName = (newName) => {
    setName(newName);
  };

  const [name1, setName1] = useState("");


  const updateName1 = (newName) => {
    setName1(newName);
  };
  const [name3, setName3] = useState("");


  const updateName3 = (newName) => {
    setName3(newName);
  };

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About updateName1={updateName1} />}></Route>
        {/* <Route path="/contact" element={<Contact name={name} updateName={updateName} name1={name1} updateName1={updateName1} name3={name3} updateName3={updateName3 } />}></Route> */}
        <Route path='/form' element={<FillForm updateName={updateName}  />}></Route>
        <Route path='/info' element={<Info updateName3={updateName3}  />}></Route>
        <Route path='/resume' element={<Resume  name={name} updateName={updateName} name1={name1} updateName1={updateName1} name3={name3} updateName3={updateName3 }  />}></Route>
        <Route path='/resume2' element={<Resume2 name={name} updateName={updateName} name1={name1} updateName1={updateName1} name3={name3} updateName3={updateName3 }  />}></Route>
        <Route path="/test" element={<Resume3 updateName3={updateName3}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
