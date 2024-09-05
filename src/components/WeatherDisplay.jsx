import React from 'react'
import { utilService } from '../services/util.service'

import WeatherForecast from './WeatherForecast'
import WeatherDetails from './WeatherDetails'
import WeatherTemp from './WeatherTemp'
import WeatherLocation from './WeatherLocation'

export default function WeatherDisplay({ weatherData }) {

    const {
        cityName = 'Unknown City',
        country = 'Unknown Country',
        temperature = 30,
        description = 'rainy',
        precipitation = 0,
        humidity = 30,
        windSpeed = 30,
        localTime = 0,
        forecast = []
    } = weatherData

    const formattedDate = utilService.formatDate(localTime * 1000)

    return (
        <aside className='weather-container'>
            <section className='weather-widget'>
                <WeatherLocation
                    cityName={cityName}
                    country={country}
                    localTime={formattedDate} />
                <WeatherTemp
                    temperature={temperature}
                    description={description} />
                <WeatherDetails
                    precipitation={precipitation}
                    humidity={humidity}
                    windSpeed={windSpeed} />
                <WeatherForecast
                    forecast={forecast} />
            </section>
        </aside>
    )
}
