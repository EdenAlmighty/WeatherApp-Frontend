import React from 'react'
import ForecastPreview from './ForecastPreview'
import { utilService } from '../services/util.service'

export default function WeatherForecast({ forecast }) {
    const now = Date.now() / 1000

    const filteredForecast = forecast.filter(item => item.time > now).slice(0, 5)

    if (filteredForecast.length < 5) {
        const remainingHoursNeeded = 5 - filteredForecast.length
        const earlierForecast = forecast.filter(item => item.time <= now)
            .slice(-remainingHoursNeeded)

        filteredForecast.push(...earlierForecast)
    }

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
