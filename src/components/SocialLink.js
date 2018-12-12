import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { FaGithub, FaRegFilePdf, FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import '../style/SocialLink.css';

const getButton = (Icon, link) => {
  const iconSize = { size: '1.2em' };
  return (
    <div className="external-link">
      <IconButton href={link} target="_blank">
        <IconContext.Provider value={iconSize}>{new Icon()}</IconContext.Provider>
      </IconButton>
    </div>
  );
};

const getEmailLink = email => (
  <a className="email-link" href={`mailto:${email}`}>
    {email}
  </a>
);

const SocialLink = () => (
  <div className="SocialLink">
    <div>
      {getButton(FaGithub, 'https://www.github.com/rooneyl')}
      {getButton(FaLinkedin, 'https://www.linkedin.com/in/seongjun-lee-649598101')}
      {getButton(FaRegFilePdf, 'https://rooneyl.github.io/AboutMe/resume.pdf')}
    </div>
    {getEmailLink('hello@sjlee.org')}
  </div>
);

export default SocialLink;
