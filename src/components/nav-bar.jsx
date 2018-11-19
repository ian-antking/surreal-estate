import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <FontAwesomeIcon className="icon" icon={faHome} /><span>Surreal Estate</span>
      </div>
      <div className="nav">
        <React.Fragment>
          <Link
            to="/"
            className="item"
          >
            View
          </Link>
          <Link
            to="/addProperties"
            className="item"
          >
            Add
          </Link>
        </React.Fragment>
      </div>
    </div>
  );
};

export default NavBar;
