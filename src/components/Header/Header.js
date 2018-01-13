import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Header = props => (
  <header className="header">
    <div className="header__banner">
      <div className="header__dhamma-chakra" />
      <div className="header__title">
        <h1>Michigan Vipassana Association</h1>
        <p>
          Vipassana mediatation as taught by S.N. Goenka in the tradition of
          Sayaji U Ba Khin.
        </p>
      </div>
      <div className="header__dhamma-leaf" />
    </div>
    <nav className="header__nav">
      <ul className="header__buttons-container">
        <li>
          <Link className="header__button" to="/">Home</Link>
        </li>
        <li>
          <Link className="header__button" to="/about">About</Link>
        </li>
        <li>
          <Link className="header__button" to="/courseinfo">Course Info</Link>
        </li>
        <li>
          <Link className="header__button" to="/mva">MVA</Link>
        </li>
        <li>
          <Link className="header__button" to="/alradyregistered">Alreay Registered?</Link>
        </li>
        <li>
          <Link className="header__button" to="/contactus">Contact Us</Link>
        </li>
        <li>
          <Link className="header__button" to="/os">Old Students</Link>
        </li>
      </ul>
    </nav>
    <div className="header__image-banner" />
  </header>
);

Header.propTypes = {
  onMenuButtonClick: PropTypes.func,
};

export default Header;
