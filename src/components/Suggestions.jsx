import React from 'react'

export default function Suggestions({ cities, handleCitySelect }) {
    return (
        <ul className="suggestions">
            <li
                onMouseDown={() => handleCitySelect({ selectedCity: { name: 'useCurrentLocation' } })}
                className='location'
                role="option"
                aria-label="Use current location"
            >
                <img
                    src="/locationIcon.svg"
                    alt="Location icon"
                    className="location-icon"
                    style={{ marginRight: '0.5rem' }}
                />
                Use Current Location
            </li>

            {cities.map((city, idx) => (
                <li
                    key={idx}
                    style={{ cursor: 'pointer' }}
                    onMouseDown={() => handleCitySelect({ selectedCity: city })}
                    role="option"
                    aria-label={`${city.name}, ${city.country}`}
                >
                    {city.name}, {city.country}
                </li>
            ))}
        </ul>
    )
}
