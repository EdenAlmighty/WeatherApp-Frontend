import React, { useState } from "react"
import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"
import CitySearch from "../components/CitySearch"

export default function Home() {
	const [city, setCity] = useState('')

	return (
		<>
			<AppHeader />
			<main>
				<CitySearch city={city} setCity={setCity} />
			</main>
			<AppFooter />
		</>
	)
}
