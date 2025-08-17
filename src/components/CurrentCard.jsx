import React from 'react'
import { kelvinToC, toLocalTime } from '../utils/format'
export default function CurrentCard({ current }) {
  if (!current) return null
  const { name, sys, main, weather, wind, dt, timezone } = current
  const icon = weather?.[0]?.icon
  const desc = weather?.[0]?.description
  const local = toLocalTime(dt, timezone)
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 flex items-center gap-6 animate-fadeIn">
      <div className="shrink-0"><img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={desc} /></div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold">{name}{sys?.country ? `, ${sys.country}` : ''}</h2>
        <div className="text-sm text-white/80">{local.toLocaleString()}</div>
        <div className="text-5xl font-bold mt-2">{kelvinToC(main.temp)}°C</div>
        <div className="capitalize text-white/80">{desc}</div>
        <div className="text-sm text-white/70 mt-2">Feels like {kelvinToC(main.feels_like)}°C • Humidity {main.humidity}% • Wind {Math.round(wind.speed)} m/s</div>
      </div>
    </div>
  )
}
