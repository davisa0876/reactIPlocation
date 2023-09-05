// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({showSidebar, dropdownState, toggleDropdown   }) => {
  return (
    <nav className={`sidebar ${!showSidebar ? 'hide' : 'show'}`}>
    <ul>
        <li><i className="fas fa-home"></i><Link to="/"> Dashboard</Link></li>
        <li><i className="fas fa-info-circle"></i><Link to="/About"> About</Link></li>
        <li><i className="fas fa-globe"></i><Link to="/hello-world"> Hello World</Link></li>
        <li className="dropdown">
          <i className="fas fa-caret-down"></i>
          <label onClick={() => toggleDropdown('fundamentals')}> React Fundamentals</label>
          <ul className={`submenu ${dropdownState.fundamentals ? 'show' : ''}`}>
            <li>React 1</li>
            <li>React 2</li>
          </ul>
        </li>
        <li className="dropdown">
          <i className="fas fa-caret-down"></i>
          <label onClick={() => toggleDropdown('intermediate')}> React Intermediate</label>
          <ul className={`submenu ${dropdownState.intermediate ? 'show' : ''}`}>
            <li>React 1</li>
            <li>React 2</li>
          </ul>
        </li>
        <li className="dropdown">
          <i className="fas fa-caret-down"></i>
          <label onClick={() => toggleDropdown('professional')}> React Intermediate</label>
          <ul className={`submenu ${dropdownState.professional ? 'show' : ''}`}>
            <li>React 1</li>
            <li>React 2</li>
          </ul>
        </li>
    </ul>
    </nav>
  );
};

export default Sidebar;
