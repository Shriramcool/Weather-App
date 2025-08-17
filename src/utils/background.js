export function getWeatherBackground(main) {
  if (!main) return 'bg-gradient-to-br from-gray-800 to-black'
  switch (main.toLowerCase()) {
    case 'clear': return 'bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500'
    case 'clouds': return 'bg-gradient-to-br from-gray-500 via-gray-600 to-gray-800'
    case 'rain': return 'bg-gradient-to-br from-blue-500 via-blue-700 to-indigo-800'
    case 'snow': return 'bg-gradient-to-br from-blue-200 via-white to-blue-300'
    case 'thunderstorm': return 'bg-gradient-to-br from-gray-800 via-purple-800 to-black'
    case 'drizzle': return 'bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-700'
    case 'mist':
    case 'haze':
    case 'fog': return 'bg-gradient-to-br from-slate-400 via-slate-500 to-slate-700'
    default: return 'bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-700'
  }
}
