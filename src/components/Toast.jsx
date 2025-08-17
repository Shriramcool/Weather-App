import React from 'react'
export default function Toast({ message, onClose }) {
  if (!message) return null
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="rounded-xl bg-red-500 text-white px-4 py-2 shadow-lg flex items-center gap-3">
        <span className="font-medium">{message}</span>
        <button onClick={onClose} className="ml-2 bg-white/20 hover:bg-white/30 rounded px-2 py-1 text-sm">Dismiss</button>
      </div>
    </div>
  )
}
