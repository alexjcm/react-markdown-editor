import { useState, useEffect } from 'react';

import exampleMarkdown from '../assets/example.md';

const useInitMarkdown = () => {
  const [markdown, setMarkdown] = useState();
  useEffect(() => {
    fetch(exampleMarkdown)
      .then((response) => response.text())
      .then((data) => {
        setMarkdown(data);
      });
  }, []);

  return { markdown };
};

export default useInitMarkdown;
