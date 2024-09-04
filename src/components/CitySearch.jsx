import React, { useEffect, useState, useRef } from 'react'
import Suggestions from './Suggestions'

export default function CitySearch({
    city,
    cities,
    handleCitySelect,
    handleSubmit,
    handleChange,
    inputRef,
    placeholder,
}) {
    const [showSuggestions, setShowSuggestions] = useState(false)

    useEffect(() => {
        if (city.length > 2) {
            setShowSuggestions(true)
        } else {
            setShowSuggestions(false)
        }
    }, [city])

    const handleBlur = () => {
        setTimeout(() => setShowSuggestions(false), 100)
    }

    const handleFocus = () => {
        if (city.length > 2) setShowSuggestions(true)
    }

    return (
        <section className="search-container">
            <span>Use our weather app<br />
                to see the weather<br />
                around the world</span>
            <label htmlFor="search">City name</label>
            <form className="input-container" onSubmit={handleSubmit} role="search" aria-label="search" autoComplete='off'>
                <input
                    ref={inputRef}
                    type="text"
                    name='cityName'
                    placeholder={placeholder}
                    className="search"
                    aria-label="search"
                    aria-required="true"
                    required
                    value={city}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <button type="submit">Check</button>
                {(cities.length > 0 && showSuggestions) && (
                    <Suggestions
                        cities={cities}
                        handleCitySelect={handleCitySelect}
                    />
                )}
            </form>
        </section>
    )
}
