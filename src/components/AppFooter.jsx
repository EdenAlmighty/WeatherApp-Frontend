import React from "react";

export default function AppFooter({ location }) {
	const getCurrentDate = () => {
		const now = new Date();
		return now.toLocaleString('en-GB', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
		}).replace(',', ' at');
	};

	return (
		<footer>
			<section className="geo-location">
				<div className="coords-container flex">
					<span>latitude {location.lat}</span>
					<span>longitude {location.lon}</span>
				</div>
				{location && <span>accurate to {getCurrentDate()}</span>}
			</section>
		</footer>
	);
}
