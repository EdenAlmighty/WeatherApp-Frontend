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

    const debouncedCity = useDebounce(city, 500)

    useEffect(() => {
        if (debouncedCity) {
            weatherService.query(debouncedCity)
            console.log(debouncedCity)
        }
    }, [debouncedCity])

    function handleCitySelect(city) {
        setCity(city.name)
        fetchWeather(city.name)
    }

    function handleSubmit(ev) {
        ev.preventDefault();
        if (city) {
            fetchWeather(city);

        }
    }

    function fetchWeather(cityName) {
		console.log('fetchWeather', cityName);
		
	}

    return (
        <>
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
                    />
                    <AppFooter />
                </aside>
                <WeatherDisplay weatherData={weatherData} />
            </main>
        </>
    )
}
