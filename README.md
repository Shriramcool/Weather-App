
# Weather App

A modern weather web application built with **React**, **Tailwind CSS**, and **Vite**.  
Displays **current weather**, **5-day forecast**, and **real-time local time** for any city.

**Live Demo:** 👉 [Click here to try the app](https://weather-app-jet-kappa-32.vercel.app)

---

## Features

- Current weather for any city:
  - Temperature (°C)
  - Weather description
  - Feels like, humidity, wind
  - Weather icon
  - **Real-time local time** updating every second
- 5-day weather forecast with:
  - Daily min/max temperature
  - Weather description & icons
  - Dates displayed in **DD-MM-YYYY** format
- Modern, responsive UI using **Tailwind CSS**
- Clean code structure and reusable components

---

## Technologies Used

- **React** (Functional Components + Hooks)  
- **Vite** (Fast development environment)  
- **Tailwind CSS** (Modern styling)  
- **OpenWeatherMap API** (Weather data)  
- **Axios** (API calls)  

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Shriramcool/Weather-App
cd weather-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
VITE_OPENWEATHER_API_KEY=your_openweathermap_api_key
```

> Get your API key from [OpenWeatherMap](https://openweathermap.org/api)

### 4. Run the app locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

---

## Project Structure

```
weather-app/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ CurrentCard.jsx
│  │  └─ DailyForecast.jsx
│  ├─ utils/
│  │  └─ format.js
│  ├─ App.jsx
│  └─ main.jsx
├─ index.css
├─ package.json
└─ vite.config.js
```

- `CurrentCard.jsx` → Shows current weather + live time  
- `DailyForecast.jsx` → Shows 5-day forecast grouped by day  
- `format.js` → Helper functions (`kelvinToC`, `toLocalTime`, `groupForecastByDay`, `formatDate`)  

---

## Deployment on Vercel

1. Push your code to **GitHub**.
2. Go to [Vercel](https://vercel.com/) and **import your GitHub repo**.
3. Add your **environment variable** in Vercel dashboard:

```
VITE_OPENWEATHER_API_KEY=your_openweathermap_api_key
```

4. Deploy. Your app will be live at `https://your-vercel-project.vercel.app`.

---

## License

This project is open source and available under the MIT License.
