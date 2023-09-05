// AppHeader.js

import React from 'react';
import logo from '../../logo.svg';


const AppHeader = ({ toggleSidebar }) => {
  return (
    <header className="App-header">
      <div className="App-logoDiv" >
      <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="hamburgerDiv" >
      <button className="hamburger" onClick={toggleSidebar}>☰</button>
      </div>
    </header>
  );
};

export default AppHeader;
