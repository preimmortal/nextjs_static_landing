/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSun from '@fortawesome/fontawesome-free-regular/faSun';

const Header = (props) => (
  <header id="header" style={props.timeout ? {display: 'none'} : {}}>
    <div className="logo">
      {/* <span className="icon fa-diamond"></span>*/}
      <FontAwesomeIcon icon={faSun} transform="grow-18" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>David lau</h1>
        <p>My First Next JS Website</p>
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
