import './Header.css';
import { FaGithub } from 'react-icons/fa';

function Header() {
  return (
    <div className="header">
      <h1 className="headerTitle">Markdown editor</h1>
      <a
        className="linkGithub"
        href="https://github.com/alexjcm/react-markdown-editor"
        target="_blank"
        rel="noopener noreferrer">
        View on Github <FaGithub />
      </a>
    </div>
  );
}

export default Header;
