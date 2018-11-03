import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <FontAwesomeIcon className="icon" icon={faHome} /><span>Surreal Estate</span>
      </div>
      <div className="nav">
        <ul>
          <li className="item">One</li>
          <li className="item">Two</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
