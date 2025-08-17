import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Toast from './components/Toast'
import CurrentCard from './components/CurrentCard'
import HourlyStrip from './components/HourlyStrip'
import DailyForecast from './components/DailyForecast'
import { getByCity, getByCoords } from './utils/api'
import { getWeatherBackground } from './utils/background'
import { motion, AnimatePresence } from 'framer-motion'

export default function App() {
  const [current, setCurrent] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function loadCity(city) {
    try {
      setLoading(true); setError('')
      const { current, forecast } = await getByCity(city)
      setCurrent(current); setForecast(forecast)
    } catch (e) {
      console.error(e); setError('Could not fetch weather for that city.')
    } finally {
      setLoading(false)
    }
  }

  function loadLocation() {
    if (!navigator.geolocation) return setError('Geolocation not supported.')
    setLoading(true); setError('')
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords
      try {
        const { current, forecast } = await getByCoords(latitude, longitude)
        setCurrent(current); setForecast(forecast)
      } catch (e) {
        console.error(e); setError('Failed to fetch your location weather.')
      } finally {
        setLoading(false)
      }
    }, (err) => {
      console.error(err); setLoading(false); setError('Location permission denied.')
    }, { enableHighAccuracy: true, timeout: 10000 })
  }

  useEffect(() => { loadCity('Pune') }, [])

  const bg = current ? getWeatherBackground(current.weather?.[0]?.main) : 'bg-gradient-to-br from-gray-800 to-black'

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={bg}
          className={`absolute inset-0 ${bg}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0 }}
        />
      </AnimatePresence>

      <div className="relative z-10 max-w-4xl mx-auto px-4 pb-12">
        <Header />
        <SearchBar onSearch={loadCity} onUseMyLocation={loadLocation} />

        {loading && (
          <div className="flex justify-center my-8"><div className="spinner" /></div>
        )}

        {!loading && current && (
          <div className="mt-8 grid gap-6">
            <CurrentCard current={current} />
            <HourlyStrip list={forecast?.list} />
            <DailyForecast list={forecast?.list} />
          </div>
        )}

        <Toast message={error} onClose={() => setError('')} />
        <footer className="mt-12 text-center text-sm text-white/80">
          Data: OpenWeatherMap • Units: Metric (°C)
        </footer>
      </div>
    </div>
  )
}
