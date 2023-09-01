import { render } from '@testing-library/react';
import Loading from '../Loading';

describe('Test Error Component', () => {
  test('Loading component renders correctly', () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });
});
