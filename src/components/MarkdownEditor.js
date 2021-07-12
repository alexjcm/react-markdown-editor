import {useState, useEffect} from 'react';

import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {AiOutlineEye} from 'react-icons/ai';
import {FaMarkdown} from 'react-icons/fa';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css'; // `rehype-katex` does not import the CSS for you

import './MarkdownEditor.css';
import exampleMDPath from "../assets/example.md"

const components = {
  code({inline, className, children, ...props}) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={docco}
        language={match[1]}
        PreTag="div"
        children={String(children).replace(/\n$/, '')}
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

function MardownEditor() {
  const [markdown, setMarkdown] = useState();
  useEffect(() => {
    fetch(exampleMDPath)
      .then((response) => response.text())
      .then((data) => {
        setMarkdown(data);
      });
  }, []);

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
          rehypePlugins={[rehypeRaw, rehypeKatex]}
          remarkPlugins={[gfm, remarkMath]}
          children={markdown}
          components={components}
        />
      </div>
    </>
  );
}

export default MardownEditor;
