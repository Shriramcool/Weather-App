export function kelvinToC(k) { return Math.round(k - 273.15) }
export function toLocalTime(ts, tzOffset) { return new Date((ts + tzOffset) * 1000) }
export function groupForecastByDay(list) {
  const days = {}
  for (const slot of list) {
    const date = slot.dt_txt.split(' ')[0]
    if (!days[date]) days[date] = []
    days[date].push(slot)
  }
  return days
}
