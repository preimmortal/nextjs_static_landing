/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fab} from '@fortawesome/free-brands-svg-icons';

library.add(fab);

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    this.submitComment = this.submitComment.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  submitComment() {
    const url = 'https://davidlau.tech/contact';
    console.log(url);
    console.log(this.state);
    const response = fetch(url, {
      crossDomain: true,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    });
    console.log(response);
  }
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
            <img src="/static/images/intro.jpg" alt="" />
          </span>
          <p>
            Hi all! My name is David Lau and i'm a Software Engineer at ARM.
          </p>
          <p>
            I graduated with a M.S. in Computer Engineering from
            University of California, San Diego with a concentration
            in Embedded Systems. After graduate studies, I joined ARM
            as a memory flows software engineer, designing and implementing
            engineering design flows to generate memory compilers.
            I piloted the Cloud Program in the memory flows team
            and continue to design and implement scalable solutions
            to run engineering flows in the Cloud.
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
            <img src="/static/images/intro.jpg" alt="" />
          </span>
          <p>
            At ARM, I am the lead developer of the Cloud Project for the Memory Flows team.
          </p>
          <p>
            My work includes:
          </p>

          <p>
            Infrastructure management:
          </p>
          <ul>
            <li>License Servers</li>
            <li>Compute Resources</li>
            <li>Security Groups</li>
            <li>VPC</li>
          </ul>

          <p>
            Software Projects:
          </p>
          <ul>
            <li>Memory Compiler Flows (Python, C++, Make, CSH, BASH)</li>
            <li>Cloud Integrations (Golang)</li>
          </ul>
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
            <img src="/static/images/intro.jpg" alt="" />
          </span>
          <p>
            My interests include Cloud, Infrastructure, and DevOps.
          </p>
          <ul>
            <li>Infrastructure: 4 Node ARM Based Kubernetes Cluster for home automation and services.</li>
            <li>Infrastructure: 2 Node x86 Kubernetes Cluster for Self-Hosted CI and Repository Management</li>
            <li>Cloud AWS: VPC, EC2, S3, EBS, EFS, etc</li>
            <li>Cloud GCP: Compute</li>
            <li>Container: Docker</li>
            <li>Web Frontend: NextJS, ReactJS</li>
            <li>Web Backend: Golang</li>
            <li>Web Database: Cassandra DB, Cockroach DB</li>
            <li>Devops: Jenkins-CI, Travis-CI, Drone-CI</li>
          </ul>
          {close}
        </article>

        <article id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} 
            ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{display: 'none'}}
        >
          <h2 className="major">Contact</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            const x = document.getElementById('submitted');
            x.style.display = 'flex';
            console.log('Contact Form Submitted!');
            return false;
          }}>
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" onChange={this.changeHandler} />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" onChange={this.changeHandler} />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" onChange={this.changeHandler} rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" onClick={this.submitComment} />
              </li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
            <div id="submitted" className="submitted" style={{display: 'none'}} >
              <h2>Contact Message Submitted! Thank you!</h2>
            </div>
          </form>
          <ul className="icons">
            <li><a target="_blank" href="https://www.linkedin.com/in/david-lau-026a6049/">
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a></li>
            <li><a target="_blank" href="https://github.com/preimmortal">
              <FontAwesomeIcon icon={['fab', 'github']} />
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
