import React from 'react'
import ForecastPreview from './ForecastPreview'
import { utilService } from '../services/util.service'

export default function WeatherForecast({ forecast }) {
    const now = new Date().getHours()
    const filteredForecast = utilService.getNextFiveHours(forecast, now)

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
