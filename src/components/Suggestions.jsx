import React from 'react'

export default function Suggestions({ cities, handleCitySelect }) {
    return (
        <ul className="suggestions">
            <li onClick={() => handleCitySelect('useCurrentLocation')}>Use Current Location</li>
            {cities.map((city, idx) => (
                <li
                    key={idx}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleCitySelect(city)}
                >
                    {city.name}, {city.country}
                </li>
            ))}
        </ul>
    )
}
