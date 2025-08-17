// Convert Kelvin to Celsius
export function kelvinToC(k) {
  return Math.round(k - 273.15)
}

// Convert Unix timestamp + timezone offset (seconds) to Date object
export function toLocalTime(ts, tzOffset = 0) {
  return new Date((ts + tzOffset) * 1000)
}

// Convert timestamp to formatted date: DD-MM-YYYY
export function formatDate(ts, tzOffset = 0) {
  const date = new Date((ts + tzOffset) * 1000)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}-${month}-${year}`
}

// Group forecast data by day (returns object with date keys)
export function groupForecastByDay(list) {
  const days = {}
  for (const slot of list) {
    const dateKey = formatDate(new Date(slot.dt * 1000).getTime() / 1000) // DD-MM-YYYY
    if (!days[dateKey]) days[dateKey] = []
    days[dateKey].push(slot)
  }
  return days
}
