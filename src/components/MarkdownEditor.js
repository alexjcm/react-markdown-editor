import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

import './MarkdownEditor.css';
import useInitMarkdown from '../hooks/useInitialMarkdown';

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
  const {markdown, setMarkdown} = useInitMarkdown();

  return (
    <>
      <div className="contain">
        <div className="headerMD">MARKDOWN</div>
        <textarea
          className="textarea"
          value={markdown}
          autoFocus
          onChange={(e) => setMarkdown(e.target.value)}></textarea>
      </div>

      <div className="contain">
        <div className="headerMD">PREVIEW</div>
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
