import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">
        <span className="cloud-icon" style={{ fontSize: '3rem' }}>☁️</span>
        CLOUD COST ESTIMATOR
      </h1>
      <p className="subtitle">Trying to reduce emissions..</p>
    </header>
  );
};

export default Header; 