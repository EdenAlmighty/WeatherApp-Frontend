import React from 'react'

export default function WeatherTemp({ temperature, description }) {
    return (
        <article className="weather-temperature">
            <h1 className='temperature'>{Math.floor(temperature)}
                <img src='/degreeIcon.svg' alt='Degree icon' className='degree-sign' />
            </h1>
            <span className='description'>{description.toLowerCase()}</span>
        </article>
    )
}
