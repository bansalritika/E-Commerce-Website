import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Body from './Components/Body';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Body />
      </Router>
     
    </>
  );
}

export default App;
