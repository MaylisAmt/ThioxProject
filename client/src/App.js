import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Galerie from './Pages/Galerie';
import Contact from './Pages/Contact';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<Home/>}/>
        <Route path="/galerie" element={<Galerie/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;