import React from 'react'
import { weatherService } from '../services/weather.service'
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
        precipitation = '0 mm',
        humidity = '30%',
        windSpeed = '30 km/h',
        localtime_epoch = '1725374338',
        forecast = [
            { time: '13:00', temp: 18 },
            { time: '14:00', temp: 19 },
            { time: '15:00', temp: 20 },
            { time: '16:00', temp: 21 },
            { time: '17:00', temp: 22 }
        ]
    } = weatherData || weatherService.getDefaultWeather()

    const formattedDate = utilService.formatDate(localtime_epoch * 1000)




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
