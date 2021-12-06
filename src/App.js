import React from 'react';
import NavMenu from './components/NavMenu'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <NavMenu />
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
