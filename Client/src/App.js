import React, { Component } from 'react';
import Navbar from './Navbar.js'
import Budget from './budget/Budget.js'
import { GlobalProvider } from './States/GlobalState'
import './App.css';



class App extends Component{
  render() {
    return (
    <GlobalProvider>
      <Navbar />
      <div className='container my-5'>
        <Budget />

      </div>
    </GlobalProvider>
  );
    }
}

export default App;
