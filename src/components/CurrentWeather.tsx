import type { WeatherData, LocationData } from "../types/weather";
import { getWeatherIcon, getWindDirection } from "../utils/weather";

interface CurrentWeatherProps {
  weatherData: WeatherData;
  locationData: LocationData;
}

export function CurrentWeather({ weatherData }: CurrentWeatherProps) {
  const { current } = weatherData;

  if (!current) return null;

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-7xl sm:text-8xl font-ultralight text-white mb-3 tracking-tighter">
              {Math.round(current.temperature_2m)}°
            </div>
            <div className="text-xl text-white/70 font-light">
              Feels like {Math.round(current.apparent_temperature)}°
            </div>
          </div>
          <div className="text-8xl sm:text-9xl opacity-90">
            {getWeatherIcon(current.weathercode)}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-2xl p-6 text-center backdrop-blur-xl">
            <div className="text-blue-400 text-3xl mb-3">💧</div>
            <div className="text-white/60 text-sm font-medium mb-2 uppercase tracking-wider">
              Humidity
            </div>
            <div className="text-2xl font-light text-white">
              {current.relative_humidity_2m}%
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 text-center backdrop-blur-xl">
            <div className="text-green-400 text-3xl mb-3">💨</div>
            <div className="text-white/60 text-sm font-medium mb-2 uppercase tracking-wider">
              Wind
            </div>
            <div className="text-2xl font-light text-white">
              {Math.round(current.wind_speed_10m)} km/h
            </div>
            <div className="text-sm text-white/50 font-light mt-1">
              {getWindDirection(current.wind_direction_10m)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
