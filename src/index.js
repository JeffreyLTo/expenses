import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BudgetProvider } from './Values'


ReactDOM.render(
  <BudgetProvider>
    <App />
  </BudgetProvider>

  , document.getElementById('root')
);


