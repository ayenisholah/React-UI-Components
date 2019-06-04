import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton'
const App = () => {
  return (
    <>
      <h1>Calculator App</h1>
      <ActionButton/>
      <NumberButton/>
    </>
  );
};

export default App;
