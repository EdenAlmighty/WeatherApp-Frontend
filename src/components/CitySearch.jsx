import React from 'react'

export default function CitySearch({
    city,
    setCity,
    cities,
    setCities,
    handleCitySelect,
    handleSubmit,
    debouncedFilterCities
}) {
    function handleChange(ev) {
        const value = ev.target.value
        setCity(value)
        if (value.length > 2) {
            debouncedFilterCities(value)
                .then(res => setCities(res))
                .catch(err => console.error('Failed to filter cities:', err))
        } else {
            setCities([])
        }
    }

    return (
        <section className="search-container">
            <span>Use our weather app<br />
                to see the weather<br />
                around the world</span>
            <label htmlFor="search">City name</label>
            <form className="input-container" onSubmit={handleSubmit} role="search" aria-label="search">
                <input
                    type="text"
                    name='cityName'
                    placeholder="Search for a city"
                    className="search"
                    aria-label="search"
                    aria-required="true"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <button type="submit">Check</button>
            </form>
            {cities.length > 0 && (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
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
            )}
        </section>
    )
}
