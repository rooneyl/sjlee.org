import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { FaGithub, FaRegFilePdf, FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import '../style/SocialLink.css';

class SocialLink extends Component {
  console = () => {
    console.log('must open');
  };

  render() {
    return (
      <div className="SocialLink">
        <div className="social-icons">
          <IconButton href="https://github.com/rooneyl" target="_blank">
            <IconContext.Provider value={{ size: '1.2em' }}>
              <FaGithub />
            </IconContext.Provider>
          </IconButton>
          <IconButton>
            <IconContext.Provider value={{ size: '1.2em' }}>
              <FaLinkedin />
            </IconContext.Provider>
          </IconButton>
          <IconButton href="https://rooneyl.github.io/AboutMe/resume.pdf" target="_blank">
            <IconContext.Provider value={{ size: '1.2em' }}>
              <FaRegFilePdf />
            </IconContext.Provider>
          </IconButton>
        </div>
        <div>
          <Button>
            <a className="email-link" href="mailto:hello@sjlee.org">
              hello@sjlee.org
            </a>
          </Button>
        </div>
      </div>
    );
  }
}

export default SocialLink;
