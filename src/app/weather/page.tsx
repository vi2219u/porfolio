"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Loader2, ArrowLeft, Cloud, Sun, CloudRain, CloudLightning, CloudSnow, Wind, Droplets, Thermometer } from "lucide-react";
import Link from "next/link";

interface WeatherData {
  current: {
    temperature_2m: number;
    wind_speed_10m: number;
    relative_humidity_2m: number;
    weather_code: number;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number[];
  };
}

const getWeatherIcon = (code: number, size = 24) => {
  // WMO Weather interpretation codes (WMO code 0-99)
  if (code === 0) return <Sun size={size} className="text-yellow-400" />;
  if (code > 0 && code <= 3) return <Cloud size={size} className="text-gray-300" />;
  if (code >= 51 && code <= 67) return <CloudRain size={size} className="text-blue-400" />;
  if (code >= 71 && code <= 77) return <CloudSnow size={size} className="text-white" />;
  if (code >= 80 && code <= 82) return <CloudRain size={size} className="text-blue-500" />;
  if (code >= 95 && code <= 99) return <CloudLightning size={size} className="text-yellow-500" />;
  return <Cloud size={size} className="text-gray-400" />;
};

const getWeatherCondition = (code: number) => {
  if (code === 0) return "Clear sky";
  if (code === 1) return "Mainly clear";
  if (code === 2) return "Partly cloudy";
  if (code === 3) return "Overcast";
  if (code >= 51 && code <= 67) return "Rain";
  if (code >= 71 && code <= 77) return "Snow";
  if (code >= 80 && code <= 82) return "Rain showers";
  if (code >= 95 && code <= 99) return "Thunderstorm";
  return "Unknown";
};

export default function WeatherDashboard() {
  const [city, setCity] = useState("London");
  const [searchInput, setSearchInput] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchWeather = async (cityName: string) => {
    setLoading(true);
    setError("");
    try {
      // 1. Geocoding
      const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`);
      const geoData = await geoRes.json();
      
      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found");
      }
      
      const location = geoData.results[0];
      setCity(location.name); // Set actual resolved name

      // 2. Weather Data
      const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`);
      const weatherData = await weatherRes.json();
      
      setWeather(weatherData);
    } catch (err: any) {
      setError(err.message || "Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather("London"); // Default city
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      fetchWeather(searchInput);
      setSearchInput("");
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col items-center justify-center p-6">
      {/* Background Decor */}
      <div className="absolute top-0 -left-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full mix-blend-screen filter blur-[150px] opacity-50" />
      <div className="absolute bottom-0 -right-1/4 w-[800px] h-[800px] bg-accent/20 rounded-full mix-blend-screen filter blur-[150px] opacity-50" />
      
      <div className="absolute top-8 left-8 z-50">
        <Link href="/#projects" className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors bg-background/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/5 shadow-lg">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-4xl flex flex-col items-center"
      >
        <div className="text-center mb-10 w-full">
          <motion.div 
             initial={{ scale: 0.8, rotate: -10 }} 
             animate={{ scale: 1, rotate: 0 }}
             transition={{ type: "spring", stiffness: 200 }}
             className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(6,182,212,0.4)] border border-primary/30 backdrop-blur-md"
          >
            <CloudLightning size={40} className="text-primary" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x mb-4 tracking-tight drop-shadow-sm">
            AI Weather Predictor
          </h1>
          <p className="text-muted-foreground/80 font-medium text-lg">Real-time meteorological insights powered by Open-Meteo</p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="w-full max-w-md relative mb-12">
          <input 
            type="text" 
            placeholder="Search for a city..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full pl-6 pr-14 py-4 rounded-full bg-background/60 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(6,182,212,0.1)] focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground font-medium"
          />
          <button 
            type="submit" 
            className="absolute right-2 top-2 p-3 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-white transition-all"
            disabled={loading}
          >
            {loading ? <Loader2 size={18} className="animate-spin" /> : <Search size={18} />}
          </button>
        </form>

        <AnimatePresence mode="wait">
          {error && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-red-400 bg-red-400/10 px-6 py-3 rounded-xl border border-red-400/20 mb-8"
            >
              {error}
            </motion.div>
          )}

          {weather && !loading && !error && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              {/* Current Weather Card */}
              <div className="lg:col-span-2 relative p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-3xl border border-white/10 shadow-[0_20px_60px_-15px_rgba(6,182,212,0.15)] overflow-hidden group">
                {/* Inner Glow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl -z-10 rounded-[3rem]" />
                
                <div className="flex justify-between items-start mb-16">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground relative z-10">{city}</h2>
                    <p className="text-muted-foreground mt-1 capitalize relative z-10">{getWeatherCondition(weather.current.weather_code)}</p>
                  </div>
                  <div className="p-4 bg-background/80 rounded-2xl shadow-inner relative z-10">
                    {getWeatherIcon(weather.current.weather_code, 48)}
                  </div>
                </div>

                <div className="flex items-end gap-6 relative z-10">
                  <div className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400 dark:from-white dark:to-gray-600">
                    {Math.round(weather.current.temperature_2m)}°
                  </div>
                  <div className="flex flex-col gap-2 mb-2">
                    <div className="flex items-center gap-2 text-muted-foreground bg-background/40 px-3 py-1.5 rounded-lg border border-white/5">
                      <Wind size={16} className="text-primary" />
                      <span className="text-sm font-medium">{weather.current.wind_speed_10m} km/h</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground bg-background/40 px-3 py-1.5 rounded-lg border border-white/5">
                      <Droplets size={16} className="text-accent" />
                      <span className="text-sm font-medium">{weather.current.relative_humidity_2m}% Humidity</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Forecast Sidebar */}
              <div className="bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 shadow-[0_20px_60px_-15px_rgba(168,85,247,0.1)] flex flex-col gap-4 relative group">
                <div className="absolute -inset-1 bg-gradient-to-b from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl -z-10 rounded-[3rem]" />
                <h3 className="font-semibold text-xl text-foreground mb-4 flex items-center gap-3 relative z-10">
                  <Thermometer size={18} className="text-red-400" /> Forecast
                </h3>
                
                {weather.daily.time.slice(1, 6).map((time, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    key={time} 
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                  >
                    <div className="text-muted-foreground text-sm font-medium">
                      {new Date(time).toLocaleDateString('en-US', { weekday: 'short' })}
                    </div>
                    <div className="flex items-center gap-4">
                      {getWeatherIcon(weather.daily.weather_code[idx+1], 20)}
                      <div className="flex gap-2 text-sm font-medium">
                        <span className="text-foreground">{Math.round(weather.daily.temperature_2m_max[idx+1])}°</span>
                        <span className="text-muted-foreground">{Math.round(weather.daily.temperature_2m_min[idx+1])}°</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
