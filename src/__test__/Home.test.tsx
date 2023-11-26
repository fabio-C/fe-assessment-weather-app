import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Home from '../pages/home/Home';

test('Home is correctly rendered', () => {
  const { getByTestId } = render(<Home />);
  const containerTitleElement = getByTestId("container-title");
  expect(containerTitleElement).toBeInTheDocument();
});
