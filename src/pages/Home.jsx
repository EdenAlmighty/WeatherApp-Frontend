import React, { useState } from "react"
import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"
import CitySearch from "../components/CitySearch"
import WeatherDisplay from "../components/WeatherDisplay"

export default function Home() {
	const [city, setCity] = useState('')

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
