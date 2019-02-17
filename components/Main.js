/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';

class Main extends React.Component {
  render() {
    const close = <div className="close" onClick={() => {
      this.props.onCloseArticle();
    }}></div>;

    return (
      <div
        id="main"
        style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}
      >

        <article id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} 
          ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{display: 'none'}}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src="/static/images/pic01.jpg" alt="" />
          </span>
          <p>
            This is my intro.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          {close}
        </article>

        <article id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} 
          ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{display: 'none'}}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src="/static/images/pic02.jpg" alt="" />
          </span>
          <p>This is my first project</p>
          <p>This is my second project.</p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} 
            ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{display: 'none'}}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src="/static/images/pic03.jpg" alt="" />
          </span>
          <p>This is my about page.</p>
          {close}
        </article>

        <article id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} 
            ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{display: 'none'}}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a></li>
            <li><a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a></li>
            <li><a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a></li>
            <li><a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a></li>
          </ul>
          {close}
        </article>

      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Main;
