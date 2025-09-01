import type { WeatherData, LocationData } from "../types/weather";
import { getWeatherIcon, formatDateWithDay } from "../utils/weather";

interface WeatherDisplayProps {
  weatherData: WeatherData;
  locationData: LocationData;
}

export function WeatherDisplay({ weatherData }: WeatherDisplayProps) {
  const { daily } = weatherData;

  if (!daily || !daily.time) {
    return null;
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h3 className="text-2xl font-light text-white/80 mb-6 text-center uppercase tracking-widest">
        7-Day Forecast
      </h3>

      <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-white/10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {daily.time.map((date, index) => {
            const isToday = index === 0;
            return (
              <div
                key={date}
                className={`text-center p-4 rounded-2xl transition-all duration-500 hover:scale-105 hover:bg-white/10 ${
                  isToday
                    ? "bg-blue-500/20 border border-blue-400/30"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                <div className="font-light text-sm text-white/70 mb-3 uppercase tracking-wider">
                  {isToday ? "Today" : formatDateWithDay(date)}
                </div>
                <div className="text-4xl mb-4 opacity-90">
                  {getWeatherIcon(daily.weathercode[index])}
                </div>
                <div className="space-y-1">
                  <div className="text-xl font-light text-white">
                    {Math.round(daily.temperature_2m_max[index])}°
                  </div>
                  <div className="text-sm text-white/50 font-light">
                    {Math.round(daily.temperature_2m_min[index])}°
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
