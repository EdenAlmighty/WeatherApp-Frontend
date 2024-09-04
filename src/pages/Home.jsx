import React, { useEffect, useState } from "react"
import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"
import CitySearch from "../components/CitySearch"
import WeatherDisplay from "../components/WeatherDisplay"
import { useDebounce } from "../hooks/useDebounce"
import { weatherService } from "../services/weather.service"

export default function Home() {
    const [city, setCity] = useState('')
    const [weatherData, setWeatherData] = useState(null)
    const [cities, setCities] = useState([])
    const debouncedCity = useDebounce(city, 1000)

    useEffect(() => {
        if (debouncedCity.length > 2) {
            onGetCities(debouncedCity)
        } else {
            setCities([])
        }
    }, [debouncedCity])    

    async function onGetCities(cityName) {
        try {
            const data = await weatherService.query(cityName)
            setCities(data)
            console.log('cities: ', data)
        } catch (error) {
            console.error('Failed to fetch cities:', error)
        }
    }
    

    function handleChange(ev) {
        const value = ev.target.value
        setCity(value)
    }

    function handleCitySelect(selectedCity) {
        setCity(selectedCity.name)
        fetchWeather(selectedCity.name)
    }

    function handleSubmit(ev) {
        ev.preventDefault()
        fetchWeather(city)
    }

    async function fetchWeather(cityName) {
        try {
            const data = await weatherService.getByCity(cityName)
            setWeatherData(data)
            console.log('weatherData: ', data)

        } catch (error) {
            console.error('Failed to fetch weather data:', error)
        } finally {
            setCities([])
            setCity('')
        }
    }

    return (
        <main className="main-container">
            <aside className="hero">
                <AppHeader />
                <CitySearch
                    city={city}
                    setCity={setCity}
                    cities={cities}
                    setCities={setCities}
                    handleCitySelect={handleCitySelect}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                />
                <AppFooter />
            </aside>
            {weatherData && <WeatherDisplay weatherData={weatherData} />}
            {/* <WeatherDisplay weatherData={weatherData} /> */}
        </main>
    )
}
