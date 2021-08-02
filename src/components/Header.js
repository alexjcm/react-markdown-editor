import React from 'react';

import './Header.css';
import {GoMarkGithub} from 'react-icons/go';

function Header() {
  return (
    <div className="header">
      <h1 className="headerTitle">Markdown editor</h1>
      <a
        className="linkGithub"
        href="https://github.com/alexjcm/react-markdown-editor"
        target="_blank"
        rel="noopener noreferrer">
        View on Github <GoMarkGithub />
      </a>
    </div>
  );
}

export default Header;
