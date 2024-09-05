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
    isLoading,
    error
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
            <span className='search-title'>Use our weather app<br />
                to see the weather<br />
                around the world</span>
            <label htmlFor="search">City name</label>
            <form className="input-container" onSubmit={handleSubmit} role="search" aria-label="Search form" autoComplete='off'>
                <div className={`input-wrapper ${error ? 'input-error' : ''}`}>
                    <input
                        ref={inputRef}
                        type="text"
                        name='cityName'
                        placeholder={placeholder}
                        className={`search ${error ? 'error' : ''}`}
                        aria-label="search"
                        aria-required="true"
                        required
                        value={city}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    {error && <span className="error-message">Something went wrong. Enter a valid city or try again.</span>}
                </div>
                <button type="submit" aria-label="Check weather">
                    {isLoading ?
                        <div className="loader" aria-label="Loading..."></div> : `Check`}
                </button>
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
