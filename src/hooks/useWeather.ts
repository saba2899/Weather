import { useState } from "react";
import type {
  WeatherData,
  LocationData,
  GeocodingResponse,
} from "../types/weather";

export function useWeather() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [locationData, setLocationData] = useState<LocationData | null>(null);

  const getWeather = async (query: string) => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${query}`
      );
      const geoData: GeocodingResponse = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("Location not found");
      }

      const location = geoData.results[0];
      setLocationData(location);

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&timezone=${location.timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
      );

      if (!weatherRes.ok) {
        throw new Error(`Weather API error: ${weatherRes.status}`);
      }

      const weatherData: WeatherData = await weatherRes.json();
      setWeatherData(weatherData);
      console.log(weatherData);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const clearData = () => {
    setWeatherData(null);
    setLocationData(null);
    setError(null);
  };

  return {
    loading,
    error,
    weatherData,
    locationData,
    getWeather,
    clearData,
  };
}
