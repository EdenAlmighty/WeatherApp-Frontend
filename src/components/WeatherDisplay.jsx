import React from 'react'

export default function WeatherDisplay() {
    const forecast = [
        {
            time: '13:00',
            temp: 18
        },
        {
            time: '14:00',
            temp: 19
        },
        {
            time: '15:00',
            temp: 20
        },
        {
            time: '16:00',
            temp: 21
        },
        {
            time: '17:00',
            temp: 22
        }
    ]

    return (
        <aside className='weather-container'>
            <section className='weather-widget'>
                <article className="weather-location">
                    <h3>Tel Aviv</h3>
                    <span>Israel</span>
                    <p>13/2/22 at 16:00</p>
                </article>

                <article className="weather-temperature">
                    <h1>18
                        <img src='/degreeIcon.svg' alt='degree icon' className='degree-sign' />
                    </h1>
                    <span>sunny</span>
                </article>

                <article className="weather-details">
                    <div>
                        <span>precipitation</span>
                        <p>0 mm</p>
                    </div>
                    <div>
                        <span>humidity</span>
                        <p>53%</p>
                    </div>
                    <div>
                        <span>wind</span>
                        <p>28 km/h</p>
                    </div>
                </article>

                <ul className="weather-forecast">
                    {forecast.map((item, idx) => (
                        <li key={idx}>
                            <span>{item.time}</span>
                            <p>{item.temp}
                            </p>
                            <img src='/degreeIcon.svg' alt='degree icon' className='degree-sign' />
                        </li>
                    ))}
                </ul>
            </section>
        </aside>
    )
}
