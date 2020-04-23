import React, { Component } from 'react';
import Navbar from './Navbar.js'
import Budget from './budget/Budget.js'
import './App.css';



class App extends Component{
  render() {
    return (
    <div className = "App">
      <Navbar />
      <div className='container my-5'>
        <Budget />

      </div>
    </div>
  );
    }
}

export default App;
