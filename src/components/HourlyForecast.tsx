import type { WeatherData } from "../types/weather";
import { getWeatherIcon } from "../utils/weather";

interface HourlyForecastProps {
  weatherData: WeatherData;
}

export function HourlyForecast({ weatherData }: HourlyForecastProps) {
  const { hourly } = weatherData;
  
  if (!hourly || !hourly.time || hourly.time.length === 0) return null;

  // Show next 24 hours
  const next24Hours = hourly.time.slice(0, 24);

  return (
    <div className="w-full mb-3 sm:mb-4">
      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 text-center">
        24-Hour Forecast
      </h3>
      
      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 shadow-xl">
        <div className="flex overflow-x-auto gap-4 pb-2">
          {next24Hours.map((time, index) => {
            const hour = new Date(time).getHours();
            const temp = Math.round(hourly.temperature_2m[index]);
            const precipitation = hourly.precipitation_probability[index];
            const weatherCode = hourly.weathercode[index];
            
            return (
              <div 
                key={time} 
                className="flex-shrink-0 text-center bg-white/20 rounded-xl p-3 min-w-[80px]"
              >
                <div className="text-sm text-white/80 mb-2">
                  {hour === 0 ? '12 AM' : hour <= 12 ? `${hour} AM` : `${hour - 12} PM`}
                </div>
                <div className="text-2xl mb-2">
                  {getWeatherIcon(weatherCode)}
                </div>
                <div className="text-lg font-semibold text-white mb-1">
                  {temp}°
                </div>
                {precipitation > 0 && (
                  <div className="text-xs text-blue-200">
                    {precipitation}%
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
