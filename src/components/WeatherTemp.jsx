import React from 'react'

export default function WeatherTemp({ temperature, description }) {
    return (
        <article className="weather-temperature">
            <h1>{Math.floor(temperature)}
                <img src='/degreeIcon.svg' alt='degree icon' className='degree-sign' />
            </h1>
            <span>{description}</span>
        </article>
    )
}
