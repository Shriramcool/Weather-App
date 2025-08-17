import React, { useMemo } from 'react'
import { groupForecastByDay } from '../utils/format'
export default function DailyForecast({ list }) {
  const days = useMemo(() => {
    if (!list?.length) return []
    const grouped = groupForecastByDay(list)
    return Object.entries(grouped).map(([date, slots]) => {
      const mid = slots.find(s => s.dt_txt.includes('12:00:00')) || slots[Math.floor(slots.length/2)]
      const min = Math.min(...slots.map(s => s.main.temp_min))
      const max = Math.max(...slots.map(s => s.main.temp_max))
      return { date, icon: mid.weather[0].icon, desc: mid.weather[0].description, min: Math.round(min - 273.15), max: Math.round(max - 273.15) }
    })
  }, [list])
  if (!days.length) return null
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20">
      <h3 className="text-lg font-semibold mb-3">5-Day Forecast</h3>
      <div className="grid sm:grid-cols-5 grid-cols-2 gap-3">
        {days.slice(0,5).map(d => (
          <div key={d.date} className="rounded-xl border border-white/20 bg-white/5 p-3 text-center">
            <div className="text-sm font-medium">{new Date(d.date).toLocaleDateString(undefined, {weekday:'short', month:'short', day:'numeric'})}</div>
            <img className="mx-auto" src={`https://openweathermap.org/img/wn/${d.icon}.png`} alt={d.desc} />
            <div className="text-sm capitalize text-white/80">{d.desc}</div>
            <div className="text-base font-semibold mt-1">{d.max}° / {d.min}°C</div>
          </div>
        ))}
      </div>
    </div>
  )
}
