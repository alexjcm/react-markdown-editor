import React from 'react';
import { render } from '@testing-library/react';
import MarkdownEditor from '../components/MarkdownEditor';

test('renders editor without crashing', () => {
  render(<MarkdownEditor />);
});
