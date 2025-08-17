import React, { useState } from 'react'
export default function SearchBar({ onSearch, onUseMyLocation }) {
  const [city, setCity] = useState('')
  function submit(e){ e.preventDefault(); if (city.trim()) onSearch(city.trim()) }
  return (
    <div className="w-full flex flex-col sm:flex-row gap-3">
      <form onSubmit={submit} className="flex w-full max-w-xl mx-auto">
        <input className="flex-1 rounded-l-2xl border border-white/20 bg-white/10 text-white placeholder-white/60 px-4 py-2 outline-none"
          placeholder="Search city (e.g., Pune)" value={city} onChange={e=>setCity(e.target.value)} />
        <button type="submit" className="rounded-r-2xl bg-white/20 hover:bg-white/30 text-white px-4 py-2">Search</button>
      </form>
      <button type="button" onClick={onUseMyLocation} className="rounded-2xl bg-white/20 hover:bg-white/30 text-white px-4 py-2 mx-auto sm:mx-0">
        Use My Location
      </button>
    </div>
  )
}
