import React from 'react'

export default function WeatherTemp({ temperature, description }) {
    const limitedDescription = description.split(' ').slice(0, 2).join(' ');

    return (
        <article className="weather-temperature">
            <h1 className='temperature'>{Math.floor(temperature)}
                <img src='/degreeIcon.svg' alt='Degree icon' className='degree-sign' />
            </h1>
            <span className='description'>{limitedDescription.toLowerCase()}</span>
        </article>
    )
}
