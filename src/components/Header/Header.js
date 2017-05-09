import React, { PropTypes } from 'react';

const Header = (props) => (
  <header className="header">
    <div className="header__banner">
      <h1>Michigan Vipassana Association</h1>
      <p>Vipassana mediatation as taught by S.N. Goenka in the tradition of Sayaji U Ba Khin.</p>
    </div>
    <nav className="header__nav">
      <ul className="header__buttons-container">
        <li className="header__button">Home</li>
        <li className="header__button">About</li>
        <li className="header__button">Course Info</li>
        <li className="header__button">MVA</li>
        <li className="header__button">Alreay Registered?</li>
        <li className="header__button">Contact Us</li>
        <li className="header__button">Old Students</li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onMenuButtonClick: PropTypes.func,
};

export default Header;
