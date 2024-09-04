import React from 'react'
import ForecastPreview from './ForecastPreview'

export default function WeatherForecast({ forecast }) {
    const now = new Date()
    const currentHour = now.getHours()

    const startHour = Math.max(0, currentHour - 2)
    const endHour = Math.min(23, currentHour + 2)


    const filteredForecast = forecast.filter(item => {
        const hour = parseInt(item.time.split(':')[0])
        return hour >= startHour && hour <= endHour
    })
    console.log('forecast: ', forecast);
    
    return (
        <ul className="weather-forecast">
            {filteredForecast.map((item, idx) => (
                <ForecastPreview key={idx} time={item.time} temp={item.temp} />
            ))}
        </ul>
    )
}
