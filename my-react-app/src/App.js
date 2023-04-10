import React from 'react';
import './App.css';

// import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar.js';
import Home from './components/Home.js';

// import { About } from './components/About';
// import { Contact } from "./components/Contact";
// import { Signin } from "./components/Signin";

function App() {

  return (
    <>
    {/* <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="Contact" element={<Contact />} />
          <Route exact path="About" element={<About />} />
          <Route exact path="Signin" element={<Signin />} />
        </Routes>
      </BrowserRouter> */}


      <Navbar title="Text Analyzer" />
      <Home />
    </>
  )
}
export default App;