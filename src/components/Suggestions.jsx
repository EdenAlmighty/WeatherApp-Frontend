import React from 'react'

export default function Suggestions({ cities, handleCitySelect }) {
    return (
        <ul className="suggestions">
            <li
                onMouseDown={() => handleCitySelect({ selectedCity: { name: 'useCurrentLocation' } })}
                className='location'
            >
                <img
                    src="/locationIcon.svg"
                    alt="location icon"
                    className="location-icon"
                    style={{ marginRight: '0.5rem' }}
                    aria-label='location'
                />
                Use Current Location
            </li>

            {cities.map((city, idx) => (
                <li
                    key={idx}
                    style={{ cursor: 'pointer' }}
                    onMouseDown={() => handleCitySelect({ selectedCity: city })}
                >
                    {city.name}, {city.country}
                </li>
            ))}
        </ul>
    )
}
