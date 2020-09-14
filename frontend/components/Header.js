/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBurn} from '@fortawesome/free-solid-svg-icons';

library.add(faBurn);

const Header = (props) => (
  <header id="header" style={props.timeout ? {display: 'none'} : {}}>
    <div className="logo">
      {/* <span className="icon fa-diamond"></span>*/}
      <FontAwesomeIcon icon={faBurn} transform="grow-40" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>David lau</h1>
        <p>Senior Software Engineer</p>
        <p>arm</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a href="javascript:;"
            onClick={() => {
              props.onOpenArticle('intro');
            }}>
            Intro
          </a>
        </li>
        <li>
          <a href="javascript:;"
            onClick={() => {
              props.onOpenArticle('work');
            }}>
            Work
          </a>
        </li>
        <li>
          <a href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about');
            }}>
            About
          </a>
        </li>
        <li>
          <a href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact');
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
