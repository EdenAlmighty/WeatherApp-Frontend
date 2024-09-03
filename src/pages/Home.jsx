import React, { useEffect, useState } from "react"
import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"
import CitySearch from "../components/CitySearch"
import WeatherDisplay from "../components/WeatherDisplay"
import { useDebounce } from "../hooks/useDebounce"

export default function Home() {
	const [city, setCity] = useState('')
	const debouncedCity = useDebounce(city, 500)

	useEffect(() => {
		if (debouncedCity) {
			console.log(debouncedCity)
		}
	}, [debouncedCity])

	return (
		<>
			<main className="main-container">
				<aside className="hero">
					<AppHeader />
					<CitySearch city={city} setCity={setCity} />
					<AppFooter />
				</aside>
				<WeatherDisplay />
			</main>
		</>
	)
}
