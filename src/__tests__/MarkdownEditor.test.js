import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import MardownEditor from '../components/MarkdownEditor';

/**
 * This test mounts a component and makes sure that it didn’t throw during rendering.
 */
test('renders without crashing', () => {
  shallow(<MardownEditor />);
});

/**
 * test if the UI renders correctly
 */
test('renders correctly', () => {
  const rendered = renderer.create(<MardownEditor />);
  expect(rendered.toJSON()).toMatchSnapshot();
});
