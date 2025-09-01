export interface WeatherData {
  daily: {
    weathercode: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    time: string[];
  };
  current?: {
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    weathercode: number;
  };
  hourly?: {
    time: string[];
    temperature_2m: number[];
    weathercode: number[];
    precipitation_probability: number[];
  };
}

export interface LocationData {
  latitude: number;
  longitude: number;
  timezone: string;
  name: string;
  country_code: string;
}

export interface GeocodingResponse {
  results?: LocationData[];
}

export interface WeatherIconMap {
  [key: string]: string;
}
