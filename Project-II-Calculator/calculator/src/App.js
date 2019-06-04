import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay' 

const App = () => {
  return (
    <>
      <h1>Calculator App</h1>
      <CalculatorDisplay/>
      <ActionButton/>
      <NumberButton/>
    </>
  );
};

export default App;
