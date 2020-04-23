import React from 'react';
import { Header } from './components/Header'
import { Money } from './components/Money'
import { Expenses } from './components/Expenses'
import { AddExpense } from './components/AddExpense'


import './App.css';


function App() {
  return (
    <div>
      {/* Render the Header component*/}
      <Header />
      <Money />
      <Expenses />
      <AddExpense />
      
    </div>
  );
}

export default App;
