import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { new_wip } from '../../app';

const Header = props => (
  <header className="header">
    <div className="header__banner">
      <div className="header__dhamma-chakra" />
      <div className="header__title">
        <h1>Michigan Vipassana Association</h1>
        <p>
          Vipassana meditation as taught by S.N. Goenka in the tradition of
          Sayaji U Ba Khin.
        </p>
      </div>
      <div className="header__dhamma-leaf" />
    </div>
    <nav className="header__nav">
      <ul className="header__buttons-container">
        <li>
          <Link className="header__button" to={`${new_wip}/`}>
            Home
          </Link>
        </li>
        <li>
          <span className="header__button">About</span>
          <ul className="header__dropdown header__dropdown--about">
            <li>
              <a
                className="header__button"
                href="http://www.dhamma.org/en/about/vipassana"
                target="_blank"
              >
                Introduction to Vipassana
                <span className="fas fa-external-link-alt" />
              </a>
            </li>
            <li>
              <a
                className="header__button"
                href="http://video.server.dhamma.org/video/intro/vintro.htm"
                target="_blank"
              >
                Vipassana Meditation Video
                <span className="fas fa-external-link-alt" />
              </a>
            </li>
            <li>
              <a
                className="header__button"
                href="http://www.dhamma.org/en/about/goenka"
                target="_blank"
              >
                About S.N. Goenka
                <span className="fas fa-external-link-alt" />
              </a>
            </li>
            <li>
              <a
                className="header__button"
                href="http://www.dhamma.org/en/about/qanda"
                target="_blank"
              >
                Frequently Asked Questions
                <span className="fas fa-external-link-alt" />
              </a>
            </li>
          </ul>
        </li>
        <li>
          <span className="header__button" to={`${new_wip}/courseinfo`}>
            Course Info
          </span>
          <ul className="header__dropdown header__dropdown--course-info">
            <li>
              <a
                className="header__button"
                href="http://www.dhamma.org/en/about/code"
                target="_blank"
              >
                Code of Discipline
                <span className="fas fa-external-link-alt" />
              </a>
            </li>
            <li>
              <a
                className="header__button"
                href="https://www.dhamma.org/en-US/schedules/noncenter/mi.us"
                target="_blank"
              >
                Course Schedule
                <span className="fas fa-external-link-alt" />
              </a>
            </li>
            <li>
              <Link
                className="header__button"
                to={`${new_wip}/youth`}
              >
                Youth Courses
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link className="header__button" to={`${new_wip}/mva`}>
            MVA
          </Link>
        </li>
        <li>
          <Link className="header__button" to={`${new_wip}/already-registered`}>
            Already Registered?
          </Link>
        </li>
        <li>
          <Link className="header__button" to={`${new_wip}/contactus`}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link className="header__button" to={`${new_wip}/os`}>
            Old Students
          </Link>
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
