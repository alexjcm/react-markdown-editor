import { useState, useEffect } from 'react';

import exampleMarkdown from '../assets/example.md';

const useInitMarkdown = () => {
  const [markdown, setMarkdown] = useState();
  useEffect(() => {
    const controller = new AbortController();
    fetch(exampleMarkdown, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Failed to load example markdown');
        return response.text();
      })
      .then((data) => {
        setMarkdown(data);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.error('Error loading markdown:', err);
        }
      });
    return () => controller.abort();
  }, []);

  return { markdown, setMarkdown };
};

export default useInitMarkdown;
