import { render } from '@testing-library/react';
import Error from '../Error';

describe('test error component', () => {
  test('Error renders correctly', () => {
    const { container } = render(<Error />);
    expect(container).toMatchSnapshot();
  });
});
