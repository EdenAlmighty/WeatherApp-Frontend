import React from 'react'

export default function WeatherDetails({ precipitation, humidity, windSpeed }) {
  return (
    <article className="weather-details">
    <div className='precipitation'>
        <span>precipitation</span>
        <p>{precipitation} mm</p>
    </div>
    <div className='humidity'>
        <span>humidity</span>
        <p>{humidity}%</p>
    </div>
    <div className='wind'>
        <span>wind</span>
        <p>{Math.floor(windSpeed)} km/h</p>
    </div>
</article>  )
}
