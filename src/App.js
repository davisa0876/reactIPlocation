import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './views/AppRouter';
import Sidebar from './views/menu/Sidebar';
import AppHeader from './views/menu/AppHeader';
import './App.css';

function App() {
  const [showSidebar, setShowSidebar] = useState(window.innerWidth > 768);
  
  const [dropdownState, setDropdownState] = useState({
    fundamentals: false,
    intermediate: false,
    professional: false
  });

  const toggleSidebar = () => {
    console.log('Sidebar toggled');
    setShowSidebar(!showSidebar);
  };


  const handleResize = () => {
    setShowSidebar(window.innerWidth > 768);
  };

  // Add event listener for window resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Cleanup: remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // The empty dependency array means this effect will run once when the component mounts, and the cleanup will run when it unmounts


  const toggleDropdown = (key) => {
    setDropdownState({
      ...dropdownState,
      [key]: !dropdownState[key],
    });
  };

  return (
    <Router>
      <div className="App">
        <AppHeader toggleSidebar={toggleSidebar} />
        <div className={`App-body ${!showSidebar ? 'no-sidebar' : ''}`}>
          <Sidebar 
            showSidebar={showSidebar} 
            dropdownState={dropdownState} 
            toggleDropdown={toggleDropdown} 
          />
          <main>
            <AppRouter />
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
