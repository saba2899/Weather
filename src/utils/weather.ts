import { flag } from "country-emoji";

export function getWeatherIcon(wmoCode: number): string {
  const icons = new Map([
    [[0], "☀️"],
    [[1], "🌤"],
    [[2], "⛅️"],
    [[3], "☁️"],
    [[45, 48], "🌫"],
    [[51, 56, 61, 66, 80], "🌦"],
    [[53, 55, 63, 65, 57, 67, 81, 82], "🌧"],
    [[71, 73, 75, 77, 85, 86], "🌨"],
    [[95], "🌩"],
    [[96, 99], "⛈"],
  ]);

  const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return "NOT FOUND";
  return icons.get(arr) || "NOT FOUND";
}

export function convertToFlag(countryCode: string): string {
  const flagEmoji = flag(countryCode);
  return flagEmoji || countryCode;
}

export function formatDay(dateStr: string): string {
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
  }).format(new Date(dateStr));
}

export function formatDateWithDay(dateStr: string): string {
  const date = new Date(dateStr);
  const dayName = new Intl.DateTimeFormat("en", {
    weekday: "short",
  }).format(date);
  const dayNumber = date.getDate();
  const monthName = new Intl.DateTimeFormat("en", {
    month: "short",
  }).format(date);

  return `${dayName} ${dayNumber} ${monthName}`;
}

export function getWindDirection(degrees: number): string {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round(degrees / 45) % 8;
  return directions[index];
}
