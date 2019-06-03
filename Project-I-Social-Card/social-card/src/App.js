import React from 'react';
import './App.css';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail'
import HeaderContainer from './components/HeaderComponents/HeaderContainer'
import HeaderTitle from './components/HeaderComponents/HeaderTitle'
import HeaderContent from './components/HeaderComponents/HeaderContent'

const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <HeaderTitle />
      <ImageThumbnail />
      <HeaderContent />
    </div>
  );
};

export default App;