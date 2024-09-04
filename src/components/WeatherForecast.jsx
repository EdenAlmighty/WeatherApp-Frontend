import React from 'react'
import ForecastPreview from './ForecastPreview'
import { utilService } from '../services/util.service'

export default function WeatherForecast({ forecast }) {
    const now = new Date()
    const currentHour = now.getHours()

    const startHour = Math.max(0, currentHour - 2)
    const endHour = Math.min(23, currentHour + 2)

    const filteredForecast = forecast.filter(item => {
        const hour = new Date(item.time * 1000).getHours()
        return hour >= startHour && hour <= endHour
    })

    return (
        <ul className="weather-forecast">
            {filteredForecast.map((item, idx) => (
                <ForecastPreview
                    key={idx}
                    time={utilService.formatTimestamp(item.time)}
                    temp={item.temp}
                />
            ))}
        </ul>
    )
}
