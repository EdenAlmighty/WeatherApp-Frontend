import React, { useEffect, useState, useRef } from "react"
import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"
import CitySearch from "../components/CitySearch"
import WeatherDisplay from "../components/WeatherDisplay"
import { useDebounce } from "../hooks/useDebounce"
import { weatherService } from "../services/weather.service"
import ThemeToggleButton from "../components/ThemeToggleBtn"

export default function Home() {
    const [city, setCity] = useState('')
    const [weatherData, setWeatherData] = useState(null)
    const [cities, setCities] = useState([])
    const [placeholder, setPlaceholder] = useState('Search for a city')
    const [location, setLocation] = useState({ lat: 0, lon: 0 })
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const debouncedCity = useDebounce(city, 600)
    const inputRef = useRef(null)

    useEffect(() => {
        if (debouncedCity.length > 2) {
            onGetCities(debouncedCity)
        } else {
            setCities([])
        }
    }, [debouncedCity])

    useEffect(() => {
        fetchDefaultWeather()
    }, [])

    async function fetchDefaultWeather() {
        try {
            const data = await weatherService.getCityByIp()
            const cityName = data.location?.name || 'London'

            setCity(cityName)
            setLocation({ lat: data.location.lat, lon: data.location.lon })

            await fetchWeather(cityName)
        } catch (err) {
            console.error('Failed to fetch default weather data:', err)
            await fetchWeather('London')
        }
    }

    async function onGetCities(cityName) {
        try {
            const data = await weatherService.query(cityName)

            setCities(data)
        } catch (err) {
            console.error('Failed to fetch cities:', err)
        }
    }

    function handleChange(ev) {
        const value = ev.target.value
        setError(null)
        setCity(value)
    }

    function handleCitySelect({ selectedCity }) {
        if (selectedCity.name == 'useCurrentLocation') {
            fetchDefaultWeather()
        } else {
            setCity(selectedCity.name)
            fetchWeather(selectedCity.name)
        }
    }

    function handleSubmit(ev) {
        ev.preventDefault()
        fetchWeather(city)
    }

    async function fetchWeather(cityName) {
        setIsLoading(true)
        setError(null)
        try {
            const data = await weatherService.getByCity(cityName)
            if (data) {
                setWeatherData(data)
                setPlaceholder(`${data.cityName}`)
            } else {
                const defaultData = await weatherService.getByCity('London')
                setError('No results found. Please try again with a different city.')
                setWeatherData(defaultData)
            }
        } catch (err) {
            console.error('Failed to fetch weather data:', err)
            setError('Failed to fetch weather data. Please try again later.')
            const defaultData = await weatherService.getByCity('London')
            setWeatherData(defaultData)
        } finally {
            setIsLoading(false)
            setCities([])
            setCity('')
        }
    }


    return (
        <>

            <main className="main-container">
                <aside className="hero">
                    <ThemeToggleButton />
                    <AppHeader />
                    <CitySearch
                        city={city}
                        setCity={setCity}
                        cities={cities}
                        setCities={setCities}
                        handleCitySelect={handleCitySelect}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        inputRef={inputRef}
                        placeholder={placeholder}
                        setPlaceholder={setPlaceholder}
                        isLoading={isLoading}
                        error={error}
                    />
                    <AppFooter location={location} />
                </aside>

                {weatherData && (
                    <WeatherDisplay weatherData={weatherData} />
                )}
            </main>
        </>
    )
}
