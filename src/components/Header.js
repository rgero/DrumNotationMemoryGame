import React from 'react';
import '../styles/Header.css';
import '../styles/Button.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1 className="header__title">Remember Drum Notation</h1>
        <p className="header__subtitle">Seriously make this more interesting</p>
      </div>
      <div>
        <Link className="toggleButton" to="/upload/" exact="true">Upload New Cards</Link>
      </div>
    </div>
  )
}

export default Header;