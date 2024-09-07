import React from 'react'
import { utilService } from '../services/util.service'

import WeatherForecast from './WeatherForecast'
import WeatherDetails from './WeatherDetails'
import WeatherTemp from './WeatherTemp'
import WeatherLocation from './WeatherLocation'
import ThemeToggleButton from './ThemeToggleBtn'

export default function WeatherDisplay({ weatherData }) {
    const {
        cityName = 'Unknown City',
        country = 'Unknown Country',
        temperature = '?',
        description = 'rainy',
        precipitation = '?',
        humidity = '?',
        windSpeed = '?',
        localTime = '?',
        forecast = []
    } = weatherData

    const formattedDate = utilService.formatDate(localTime * 1000)

    return (
        <aside className='weather-container'>
            <ThemeToggleButton />

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
