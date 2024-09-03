import React from 'react'

export default function CitySearch({ city, setCity }) {

    function handleChange(ev) {
        const value = ev.target.value
        setCity(value)
    }

    return (
        <section className="search-container">
            <span>Use our weather app<br />
                to see the weather<br />
                around the world</span>
            <label htmlFor="search">City name</label>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Search for a city"
                    className="search"
                    aria-label="search"
                    aria-required="true"
                    required
                    value={city}
                    onChange={(ev) => handleChange(ev)}
                />
                <button>Check</button>
            </div>
        </section>
    )
}
