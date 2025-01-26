
import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Navbar from './Components/Navbar';
import Footer from "./Components/footer";
import ProjectDispaly from "./Pages/ProjectDispaly";

import './index.css';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div className="pt-24"> 
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDispaly />}/>
        <Route path="/experience" element={<Experience />} />
        </Routes>
        
        </div>
        <Footer/>
      </Router>
    </div>
    
  );
}

export default App;
