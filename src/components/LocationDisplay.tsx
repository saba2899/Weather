import type { LocationData } from "../types/weather";

interface LocationDisplayProps {
  locationData: LocationData;
}

export function LocationDisplay({ locationData }: LocationDisplayProps) {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 text-white/80">
        <span className="text-3xl">Weather</span>
        <h2 className="text-2xl font-light tracking-wide">
          {locationData.name}
        </h2>
      </div>
    </div>
  );
}
