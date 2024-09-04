import React from 'react'

export default function WeatherLocation({ cityName, country, localTime }) {
    return (
        <article className="weather-location">
            <h3>{cityName}</h3>
            <span>{country}</span>
            <p>{localTime}</p>
        </article>)
}
