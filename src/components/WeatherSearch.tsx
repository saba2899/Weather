import { useState } from "react";

interface WeatherSearchProps {
  onSearch: (query: string) => void;
  loading: boolean;
}

export function WeatherSearch({ onSearch, loading }: WeatherSearchProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="w-full max-w-lg lg:w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative w-full">
        <input
          className="w-full text-xl bg-white/10 backdrop-blur-xl border-0 rounded-2xl py-5 px-6 pr-16 text-white placeholder-white/50 focus:outline-none focus:bg-white/15 disabled:opacity-50 transition-all duration-300 shadow-2xl"
          type="text"
          placeholder="Search location..."
          value={query}
          onChange={handleInputChange}
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed p-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          )}
        </button>
      </form>
    </div>
  );
}
