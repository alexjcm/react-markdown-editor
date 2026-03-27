import { useState, useRef, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

import './MarkdownEditor.css';
import useInitMarkdown from '../hooks/useInitialMarkdown';
import { FaCopy, FaCheck } from 'react-icons/fa';

const components = {
  code({ node, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return match ? (
      <SyntaxHighlighter
        style={docco}
        language={match[1]}
        PreTag="div"
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

function MarkdownEditor() {
  const { markdown, setMarkdown } = useInitMarkdown();
  const editorRef = useRef(null);
  const previewRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [markdown]);

  const handleScroll = useCallback((e) => {
    const source = e.target;
    const target = source === editorRef.current ? previewRef.current : editorRef.current;
    
    if (target) {
      const scrollRatio = source.scrollTop / (source.scrollHeight - source.clientHeight);
      target.scrollTop = scrollRatio * (target.scrollHeight - target.clientHeight);
    }
  }, []);

  return (
    <>
      <div className="contain">
        <div className="headerMD">
          MARKDOWN
          <button className="copyBtn" onClick={handleCopy} title="Copy Markdown">
            {copied ? <FaCheck size={12} /> : <FaCopy size={12} />}
          </button>
        </div>
        <textarea
          ref={editorRef}
          className="textarea"
          value={markdown}
          autoFocus
          onScroll={handleScroll}
          onChange={(e) => setMarkdown(e.target.value)}></textarea>
      </div>

      <div className="contain">
        <div className="headerMD">PREVIEW</div>
        <div 
          ref={previewRef}
          className="markdown"
          onScroll={handleScroll}
        >
          <ReactMarkdown
            rehypePlugins={[rehypeRaw, rehypeKatex]}
            remarkPlugins={[gfm, remarkMath]}
            components={components}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default MarkdownEditor;
