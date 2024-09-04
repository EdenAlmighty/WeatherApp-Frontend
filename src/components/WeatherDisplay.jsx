import React from 'react'
import { weatherService } from '../services/weather.service.old'
import { utilService } from '../services/util.service'
import WeatherForecast from './WeatherForecast'
import WeatherDetails from './WeatherDetails'
import WeatherTemp from './WeatherTemp'
import WeatherLocation from './WeatherLocation'

export default function WeatherDisplay({ weatherData }) {

    const {
        cityName,
        country,
        temperature,
        description,
        precipitation,
        humidity,
        windSpeed,
        localTime,
        forecast
    } = weatherData || weatherService.getDefaultWeather()

    const formattedDate = utilService.formatDate(localTime * 1000)

    console.log('weatherData: ', weatherData);
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
