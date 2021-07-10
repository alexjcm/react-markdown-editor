import {useState} from 'react';

import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
//alternative to react-syntax-highlighter
//import rehypeHighlight from 'rehype-highlight'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {AiOutlineEye} from 'react-icons/ai';
import {FaMarkdown} from 'react-icons/fa';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';


import './MarkdownEditor.css';

const components = ({value, language}) => {
  return (
    <SyntaxHighlighter language={language ?? null} style={dark}>
      {value ?? ''}
    </SyntaxHighlighter>
  );
};

function MardownEditor() {
  const [markdown, setMarkdown] = useState();
  return (
    <>
      <div className="contain">
        <div className="headerMD">
          <FaMarkdown />
          WRITE MARKDOWN
        </div>
        <textarea
          className="textarea"
          value={markdown}
          autoFocus
          onChange={(e) => setMarkdown(e.target.value)}></textarea>
      </div>

      <div className="contain">
        <div className="headerMD">
          <AiOutlineEye />
          PREVIEW
        </div>
        <ReactMarkdown
          className="markdown"
          rehypePlugins={[rehypeRaw ]}
          remarkPlugins={[gfm]}
          children={markdown}
          components={components}          
        />
      </div>
    </>
  );
}

export default MardownEditor;
