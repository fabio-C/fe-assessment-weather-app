import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { getCityWeather } from '../../src/services/weather';
import Home from '../../src/pages/home/Home';

jest.mock('../../services/weather');

// TODO: to complete

describe('Home component', () => {
  test('renders without crashing', () => {
    render(<Home />);
  });

  test('fetches and displays weather data on load', async () => {
    const mockWeatherData = {
      // Mock your weather data here
    };

    getCityWeather.mockResolvedValueOnce(mockWeatherData);

    const { getByText } = render(<Home />);

    await waitFor(() => {
      expect(getCityWeather).toHaveBeenCalledWith('Milan');
      expect(getByText(/Current Weather/i)).toBeInTheDocument();
      expect(getByText(/Today's Forecast/i)).toBeInTheDocument();
      // Add more assertions based on your component's rendering
    });
  });

  test('updates city and fetches weather data on enter key press', async () => {
    const mockWeatherData = {
      // Mock your weather data here
    };

    getCityWeather.mockResolvedValueOnce(mockWeatherData);

    const { getByPlaceholderText, getByText } = render(<Home />);

    const input = getByPlaceholderText('Enter city');
    fireEvent.change(input, { target: { value: 'New York' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });

    await waitFor(() => {
      expect(getCityWeather).toHaveBeenCalledWith('New York');
      expect(getByText(/Current Weather/i)).toBeInTheDocument();
      expect(getByText(/Today's Forecast/i)).toBeInTheDocument();
    });
  });

});
