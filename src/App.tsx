import { useEffect } from "react";
import "./styles/globals.css";
import {
  WeatherSearch,
  WeatherDisplay,
  ErrorMessage,
  LocationDisplay,
  CurrentWeather,
  HourlyForecast,
  LoadingSkeleton,
} from "./components";
import { useWeather } from "./hooks/useWeather";

function App() {
  const { loading, error, weatherData, locationData, getWeather, clearData } =
    useWeather();

  // Update document title when location changes
  useEffect(() => {
    if (locationData) {
      document.title = `${locationData.name} - WeatherPal`;
    } else {
      document.title = "WeatherPal";
    }
  }, [locationData]);

  return (
    <div className="flex flex-col items-center py-8 gap-8 w-full max-w-6xl mx-auto px-4">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-2 tracking-tight">
          {locationData ? locationData.name : "Weather"}
        </h1>
        <p className="text-white/60 text-lg font-light">
          Beautiful forecasts, everywhere
        </p>
      </div>

      <WeatherSearch onSearch={getWeather} loading={loading} />

      {error && <ErrorMessage message={error} onDismiss={clearData} />}

      {locationData && <LocationDisplay locationData={locationData} />}

      {loading && locationData && <LoadingSkeleton />}

      {weatherData && locationData && !loading && (
        <>
          <CurrentWeather
            weatherData={weatherData}
            locationData={locationData}
          />
          <HourlyForecast weatherData={weatherData} />
          <WeatherDisplay
            weatherData={weatherData}
            locationData={locationData}
          />
        </>
      )}
    </div>
  );
}

export default App;
