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
        if (debouncedCity) {
            console.log('debouncedCity: ', debouncedCity);
            
            weatherService.query(debouncedCity)
                .then(res => setCities(res))
                .catch(err => console.error('Failed to fetch cities:', err))
        }
    }, [debouncedCity])

    function handleCitySelect(city) {
        setCity(city.name)
        fetchWeather(city.name)
    }

    function handleSubmit(ev) {
        ev.preventDefault()
        console.log(city);
        
        const cityName = ev.target.value
        fetchWeather(city)
    }

    async function fetchWeather(cityName) {
        try {
            const data = await weatherService.query(cityName)
            setWeatherData(data)
            console.log('weatherData: ', weatherData);
            
        } catch (error) {
            console.error('Failed to fetch weather data:', error)
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
                    debouncedFilterCities={weatherService.query}
                />
                <AppFooter />
            </aside>
            {/* {weatherData ? ( */}
                <WeatherDisplay weatherData={weatherData} />
            {/* ) : (
                <p>Please search for a city to see the weather.</p>
            )} */}
        </main>
    )
}
