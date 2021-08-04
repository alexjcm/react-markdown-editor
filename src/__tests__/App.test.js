import React from 'react';

import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import App from '../App';

/**
 * This test mounts a component and makes sure that it didn’t throw during rendering.
 */
test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

/**
 * test if the UI renders correctly
 */
test('renders correctly', () => {
  const rendered = renderer.create(<App />);
  expect(rendered.toJSON()).toMatchSnapshot();
});
