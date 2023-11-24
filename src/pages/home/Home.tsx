import { useEffect, useState } from "react";
import { getCityWeather } from "../../services/weather";
import { Weather } from "../../utils/weather.interface";

import { SearchBar } from "./components/searchBar/SearchBar";
import { CurrentWeather } from "./components/currentWeather/CurrentWeather";
import { TodayForecast } from "./components/todayForecast/TodayForecast";

import styles from "./Home.module.scss";

function Home() {
  const [weather, setWeather] = useState<Weather | null | undefined>(null);
  const [city, setCity] = useState(
    localStorage.getItem("lastCity") || "Milan"
  );

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      getWeather();
    }
  };

  async function getWeather() {
    if (city) {
      const data = await getCityWeather(city);
      if (!data) {
        return;
      }
      setWeather(data);
      setCity("");
      localStorage.setItem("lastCity", city);
    }
  }

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <main className={styles.main}>
      <SearchBar city={city} onChange={setCity} onKeyDown={handleKeyPress} />
      <CurrentWeather weather={weather} />
      <TodayForecast weather={weather} />
    </main>
  );
}

export default Home;
