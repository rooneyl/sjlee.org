import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { FaGithub, FaEnvelope, FaRegFilePdf, FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import '../style/SocialLink.css';

class SocialLink extends Component {
  render() {
    return (
      <div className="SocialLink">
        <div className="social-icons">
          <IconButton>
            <IconContext.Provider value={{ size: '1.5em' }}>
              <FaGithub />
            </IconContext.Provider>
          </IconButton>
          <IconButton>
            <IconContext.Provider value={{ size: '1.5em' }}>
              <FaLinkedin />
            </IconContext.Provider>
          </IconButton>
          <IconButton>
            <IconContext.Provider value={{ size: '1.5em' }}>
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
