import { Weather } from "../utils/weather.interface";

const apiKey = "def89915564d437898995336232411";
const apiUrl: string = "http://api.weatherapi.com/v1";

export async function getCityWeather(
  city: string
): Promise<Weather | null | undefined> {
  try {
    const response = await fetch(
      `${apiUrl}/forecast.json?key=${apiKey}&q=${encodeURIComponent(city)}&days=3`
    );
    if (!response.ok) {
      throw new Error(`HTTP response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
