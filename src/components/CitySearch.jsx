import React from 'react'
import Suggestions from './Suggestions'

export default function CitySearch({
    city,
    cities,
    handleCitySelect,
    handleSubmit,
    handleChange
}) {

    return (
        <section className="search-container">
            <span>Use our weather app<br />
                to see the weather<br />
                around the world</span>
            <label htmlFor="search">City name</label>
            <form className="input-container" onSubmit={handleSubmit} role="search" aria-label="search" autoComplete='off'>
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
                {cities.length > 0 && (
                    <Suggestions cities={cities} handleCitySelect={handleCitySelect} />
                )}
            </form>

        </section>
    )
}
