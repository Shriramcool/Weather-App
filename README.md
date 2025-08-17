# Weather Modern (React + Vite + Tailwind)

A polished weather app with **current weather**, **hourly (next 24h)**, **5-day forecast**, **geolocation**, **dynamic backgrounds**, and **glass UI**.

## Features
- Search by city
- Use current location (geolocation)
- Current weather card
- Next 24 hours (3-hourly)
- 5-day forecast with min/max and icons
- Dynamic background by weather
- Tailwind + Framer Motion animations
- Error toasts

## Setup

1. Install dependencies
```bash
npm install
```

2. Create `.env` in the project root:
```
VITE_OPENWEATHER_API_KEY=YOUR_KEY_HERE
```

3. Run
```bash
npm run dev
```

## Notes
- Uses OpenWeather `weather` and `forecast` endpoints (Kelvin -> °C conversions in UI).
