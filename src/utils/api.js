import axios from 'axios'
const BASE = 'https://api.openweathermap.org/data/2.5'
const key = import.meta.env.VITE_OPENWEATHER_API_KEY
if (!key) console.warn('Missing VITE_OPENWEATHER_API_KEY in .env')

export async function getByCity(city) {
  const params = { q: city, appid: key }
  const [cur, f] = await Promise.all([
    axios.get(`${BASE}/weather`, { params }),
    axios.get(`${BASE}/forecast`, { params }),
  ])
  return { current: cur.data, forecast: f.data }
}

export async function getByCoords(lat, lon) {
  const params = { lat, lon, appid: key }
  const [cur, f] = await Promise.all([
    axios.get(`${BASE}/weather`, { params }),
    axios.get(`${BASE}/forecast`, { params }),
  ])
  return { current: cur.data, forecast: f.data }
}
