import React from 'react'
export default function HourlyStrip({ list }) {
  if (!list?.length) return null
  const next24 = list.slice(0, 8)
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20">
      <h3 className="text-lg font-semibold mb-3">Next 24 Hours</h3>
      <div className="grid grid-flow-col auto-cols-[minmax(100px,1fr)] gap-3 overflow-x-auto pb-2">
        {next24.map(slot => (
          <div key={slot.dt} className="rounded-xl border border-white/20 bg-white/5 p-3 text-center">
            <div className="text-sm text-white/80">{new Date(slot.dt * 1000).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</div>
            <img className="mx-auto" src={`https://openweathermap.org/img/wn/${slot.weather[0].icon}.png`} alt={slot.weather[0].description} />
            <div className="text-xl font-semibold">{Math.round(slot.main.temp - 273.15)}°C</div>
            <div className="text-xs capitalize text-white/70">{slot.weather[0].description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
