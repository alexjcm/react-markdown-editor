import React from 'react';

import MarkdownEditor from './components/MarkdownEditor';
import Header from './components/Header.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="markdownEditor">
        <MarkdownEditor />
      </div>
    </div>
  );
}

export default App;
