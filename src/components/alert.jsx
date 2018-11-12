import React from 'react';

const Alert = ({ message, success }) => {
  return ((
    <div className={`alert${success ? '-success' : ''}`}>
      <span className="alert-message">
        { message }
      </span>
    </div>
  ));
};

export default Alert;
