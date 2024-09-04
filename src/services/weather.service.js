import { utilService } from "./util.service"

const WEATHER_KEY = 'weatherDB'
let runTimeCache = {}

export const weatherService = {
  query,
  getWeather,
  getDefaultWeather,
  getCities
}

async function query(city) {
  const cityUpper = city.toUpperCase()
  console.log('cityUpper: ', cityUpper)
  if (runTimeCache[cityUpper]) {
    return formatWeatherData(runTimeCache[cityUpper])
  }

  const storedWeatherData = utilService.loadFromStorage(WEATHER_KEY) || []
  const cityWeather = storedWeatherData.find(item => item.location.name.toUpperCase() === cityUpper)

  if (cityWeather) {
    runTimeCache[cityUpper] = cityWeather
    console.log('cityWeather: ', cityWeather)
    return formatWeatherData(cityWeather)
  }

  const hardcodedWeatherData = weatherData.find(item => item.location.name.toUpperCase() === cityUpper)
  console.log('hardcodedWeatherData: ', hardcodedWeatherData)

  if (hardcodedWeatherData) {
    storedWeatherData.push(hardcodedWeatherData)
    utilService.saveToStorage(WEATHER_KEY, storedWeatherData)
    runTimeCache[cityUpper] = hardcodedWeatherData
    console.log('hardcodedWeatherData: ', hardcodedWeatherData)

    return formatWeatherData(hardcodedWeatherData)
  }

  throw new Error(`No weather data available for ${city}`)
}

function formatWeatherData(data) {
  const {
    location: {
      name: cityName = 'Unknown City',
      country = 'Unknown Country',
      localtime_epoch: localTime = "0" } = {},

    current: {
      temp_c: temperature = 30,
      humidity = 30,
      precip_mm: precipitation = 0,
      condition: { text: description = 'rainy' } = {},
      wind_kph: windSpeed = 30 } = {},

    forecast: { forecastday = [] } = {}

  } = data || {}
  console.log('data: ', data)

  const hourlyForecast = forecastday.flatMap(day =>
    day.hour.map(hour => ({
      time: utilService.formatTimestamp(hour.time_epoch),
      temp: hour.temp_c
    }))
  )

  return {
    cityName,
    country,
    localTime,
    temperature,
    description,
    precipitation,
    humidity,
    windSpeed,
    forecast: hourlyForecast
  }
}

function getWeather(cityName) {
  const cityWeather = weatherData.find(item => item.location.name.toUpperCase() === cityName.toUpperCase());

  if (!cityWeather) {
    throw new Error(`No weather data available for ${cityName}`);
  }

  return formatWeatherData(cityWeather)
}

function getDefaultWeather() {
  const cityWeather = weatherData[0]
  return formatWeatherData(cityWeather)
}

async function getCities(query) {
  const queryUpper = query.toUpperCase()
  const filteredCityResults = cityResults
    .filter(item => item.name.toUpperCase().includes(queryUpper))
    .map(item => ({
      name: item.name,
      country: item.country
    }))
  return filteredCityResults
}


const weatherData = [
  {
    "location": {
      "name": "Hollywood",
      "region": "Florida",
      "country": "United States of America",
      "lat": 26.01,
      "lon": -80.15,
      "tz_id": "America/New_York",
      "localtime_epoch": 1725454002,
      "localtime": "2024-09-04 08:46"
    },
    "current": {
      "last_updated_epoch": 1725453900,
      "last_updated": "2024-09-04 08:45",
      "temp_c": 29.4,
      "temp_f": 84.9,
      "wind_mph": 10.5,
      "wind_kph": 16.9,
      "precip_mm": 0.01,
      "precip_in": 0.0
    },
    "forecast": {
      "forecastday": [
        {
          "date": "2024-09-04",
          "date_epoch": 1725408000,
          "day": {

          },
          "hour": [
            {
              "time_epoch": 1725422400,
              "time": "2024-09-04 00:00",
              "temp_c": 29.4,
              "temp_f": 84.9
            },
            {
              "time_epoch": 1725426000,
              "time": "2024-09-04 01:00",
              "temp_c": 29.3,
              "temp_f": 84.8
            },
            {
              "time_epoch": 1725429600,
              "time": "2024-09-04 02:00",
              "temp_c": 29.2,
              "temp_f": 84.6
            },
            {
              "time_epoch": 1725433200,
              "time": "2024-09-04 03:00",
              "temp_c": 29.2,
              "temp_f": 84.5
            },
            {
              "time_epoch": 1725436800,
              "time": "2024-09-04 04:00",
              "temp_c": 29.2,
              "temp_f": 84.5
            },
            {
              "time_epoch": 1725440400,
              "time": "2024-09-04 05:00",
              "temp_c": 29.2,
              "temp_f": 84.5
            },
            {
              "time_epoch": 1725444000,
              "time": "2024-09-04 06:00",
              "temp_c": 29.1,
              "temp_f": 84.4
            },
            {
              "time_epoch": 1725447600,
              "time": "2024-09-04 07:00",
              "temp_c": 29.2,
              "temp_f": 84.5
            },
            {
              "time_epoch": 1725451200,
              "time": "2024-09-04 08:00",
              "temp_c": 29.4,
              "temp_f": 84.9
            },
            {
              "time_epoch": 1725454800,
              "time": "2024-09-04 09:00",
              "temp_c": 29.8,
              "temp_f": 85.7
            },
            {
              "time_epoch": 1725458400,
              "time": "2024-09-04 10:00",
              "temp_c": 30.3,
              "temp_f": 86.6
            },
            {
              "time_epoch": 1725462000,
              "time": "2024-09-04 11:00",
              "temp_c": 30.7,
              "temp_f": 87.3
            },
            {
              "time_epoch": 1725465600,
              "time": "2024-09-04 12:00",
              "temp_c": 31.1,
              "temp_f": 88.0
            },
            {
              "time_epoch": 1725469200,
              "time": "2024-09-04 13:00",
              "temp_c": 31.4,
              "temp_f": 88.5
            },
            {
              "time_epoch": 1725472800,
              "time": "2024-09-04 14:00",
              "temp_c": 31.5,
              "temp_f": 88.7
            },
            {
              "time_epoch": 1725476400,
              "time": "2024-09-04 15:00",
              "temp_c": 31.6,
              "temp_f": 88.8
            },
            {
              "time_epoch": 1725480000,
              "time": "2024-09-04 16:00",
              "temp_c": 31.5,
              "temp_f": 88.7
            },
            {
              "time_epoch": 1725483600,
              "time": "2024-09-04 17:00",
              "temp_c": 31.3,
              "temp_f": 88.4
            },
            {
              "time_epoch": 1725487200,
              "time": "2024-09-04 18:00",
              "temp_c": 31.0,
              "temp_f": 87.8
            },
            {
              "time_epoch": 1725490800,
              "time": "2024-09-04 19:00",
              "temp_c": 30.6,
              "temp_f": 87.1
            },
            {
              "time_epoch": 1725494400,
              "time": "2024-09-04 20:00",
              "temp_c": 30.2,
              "temp_f": 86.4
            },
            {
              "time_epoch": 1725498000,
              "time": "2024-09-04 21:00",
              "temp_c": 30.0,
              "temp_f": 86.0
            },
            {
              "time_epoch": 1725501600,
              "time": "2024-09-04 22:00",
              "temp_c": 29.8,
              "temp_f": 85.7
            },
            {
              "time_epoch": 1725505200,
              "time": "2024-09-04 23:00",
              "temp_c": 29.7,
              "temp_f": 85.5
            }
          ]
        }
      ]
    }
  },
  {
    "location": {
      "name": "Tel Aviv-Yafo",
      "region": "Tel Aviv",
      "country": "Israel",
      "lat": 32.07,
      "lon": 34.76,
      "tz_id": "Asia/Jerusalem",
      "localtime_epoch": 1725453949,
      "localtime": "2024-09-04 15:45"
    },
    "current": {
      "last_updated_epoch": 1725453900,
      "last_updated": "2024-09-04 15:45",
      "temp_c": 31.1,
      "temp_f": 88.0,
      "wind_mph": 12.5,
      "wind_kph": 20.2,
      "precip_mm": 0.0,
      "precip_in": 0.0
    },
    "forecast": {
      "forecastday": [
        {
          "date": "2024-09-04",
          "date_epoch": 1725408000,
          "day": {

          },
          "hour": [
            {
              "time_epoch": 1725397200,
              "time": "2024-09-04 00:00",
              "temp_c": 26.6,
              "temp_f": 79.9
            },
            {
              "time_epoch": 1725400800,
              "time": "2024-09-04 01:00",
              "temp_c": 26.5,
              "temp_f": 79.7
            },
            {
              "time_epoch": 1725404400,
              "time": "2024-09-04 02:00",
              "temp_c": 26.3,
              "temp_f": 79.4
            },
            {
              "time_epoch": 1725408000,
              "time": "2024-09-04 03:00",
              "temp_c": 26.3,
              "temp_f": 79.3
            },
            {
              "time_epoch": 1725411600,
              "time": "2024-09-04 04:00",
              "temp_c": 26.2,
              "temp_f": 79.2
            },
            {
              "time_epoch": 1725415200,
              "time": "2024-09-04 05:00",
              "temp_c": 26.0,
              "temp_f": 78.8
            },
            {
              "time_epoch": 1725418800,
              "time": "2024-09-04 06:00",
              "temp_c": 26.3,
              "temp_f": 79.3
            },
            {
              "time_epoch": 1725422400,
              "time": "2024-09-04 07:00",
              "temp_c": 26.7,
              "temp_f": 80.1
            },
            {
              "time_epoch": 1725426000,
              "time": "2024-09-04 08:00",
              "temp_c": 27.2,
              "temp_f": 80.9
            },
            {
              "time_epoch": 1725429600,
              "time": "2024-09-04 09:00",
              "temp_c": 27.7,
              "temp_f": 81.9
            },
            {
              "time_epoch": 1725433200,
              "time": "2024-09-04 10:00",
              "temp_c": 28.3,
              "temp_f": 82.9
            },
            {
              "time_epoch": 1725436800,
              "time": "2024-09-04 11:00",
              "temp_c": 28.6,
              "temp_f": 83.5
            },
            {
              "time_epoch": 1725440400,
              "time": "2024-09-04 12:00",
              "temp_c": 28.8,
              "temp_f": 83.8
            },
            {
              "time_epoch": 1725444000,
              "time": "2024-09-04 13:00",
              "temp_c": 28.8,
              "temp_f": 83.9
            },
            {
              "time_epoch": 1725447600,
              "time": "2024-09-04 14:00",
              "temp_c": 28.7,
              "temp_f": 83.7
            },
            {
              "time_epoch": 1725451200,
              "time": "2024-09-04 15:00",
              "temp_c": 31.1,
              "temp_f": 88.0
            },
            {
              "time_epoch": 1725454800,
              "time": "2024-09-04 16:00",
              "temp_c": 28.5,
              "temp_f": 83.3
            },
            {
              "time_epoch": 1725458400,
              "time": "2024-09-04 17:00",
              "temp_c": 28.2,
              "temp_f": 82.7
            },
            {
              "time_epoch": 1725462000,
              "time": "2024-09-04 18:00",
              "temp_c": 27.6,
              "temp_f": 81.6
            },
            {
              "time_epoch": 1725465600,
              "time": "2024-09-04 19:00",
              "temp_c": 27.3,
              "temp_f": 81.1
            },
            {
              "time_epoch": 1725469200,
              "time": "2024-09-04 20:00",
              "temp_c": 27.1,
              "temp_f": 80.8
            },
            {
              "time_epoch": 1725472800,
              "time": "2024-09-04 21:00",
              "temp_c": 26.9,
              "temp_f": 80.4
            },
            {
              "time_epoch": 1725476400,
              "time": "2024-09-04 22:00",
              "temp_c": 26.7,
              "temp_f": 80.1
            },
            {
              "time_epoch": 1725480000,
              "time": "2024-09-04 23:00",
              "temp_c": 26.5,
              "temp_f": 79.7
            }
          ]
        }
      ]
    }
  },
  {
    "location": {
      "name": "London",
      "region": "City of London, Greater London",
      "country": "United Kingdom",
      "lat": 51.52,
      "lon": -0.11,
      "tz_id": "Europe/London",
      "localtime_epoch": 1725452829,
      "localtime": "2024-09-04 13:27"
    },
    "current": {
      "last_updated_epoch": 1725452100,
      "last_updated": "2024-09-04 13:15",
      "temp_c": 18.2,
      "temp_f": 64.8,
      "wind_mph": 5.6,
      "wind_kph": 9.0,
      "precip_mm": 0.11,
      "precip_in": 0.0
    },
    "forecast": {
      "forecastday": [
        {
          "date": "2024-09-04",
          "date_epoch": 1725408000,
          "day": {

          },
          "hour": [
            {
              "time_epoch": 1725404400,
              "time": "2024-09-04 00:00",
              "temp_c": 16.9,
              "temp_f": 62.5
            },
            {
              "time_epoch": 1725408000,
              "time": "2024-09-04 01:00",
              "temp_c": 16.0,
              "temp_f": 60.8
            },
            {
              "time_epoch": 1725411600,
              "time": "2024-09-04 02:00",
              "temp_c": 15.4,
              "temp_f": 59.7
            },
            {
              "time_epoch": 1725415200,
              "time": "2024-09-04 03:00",
              "temp_c": 15.5,
              "temp_f": 59.8
            },
            {
              "time_epoch": 1725418800,
              "time": "2024-09-04 04:00",
              "temp_c": 15.1,
              "temp_f": 59.1
            },
            {
              "time_epoch": 1725422400,
              "time": "2024-09-04 05:00",
              "temp_c": 14.7,
              "temp_f": 58.4
            },
            {
              "time_epoch": 1725426000,
              "time": "2024-09-04 06:00",
              "temp_c": 14.5,
              "temp_f": 58.1
            },
            {
              "time_epoch": 1725429600,
              "time": "2024-09-04 07:00",
              "temp_c": 15.5,
              "temp_f": 59.8
            },
            {
              "time_epoch": 1725433200,
              "time": "2024-09-04 08:00",
              "temp_c": 16.6,
              "temp_f": 61.8
            },
            {
              "time_epoch": 1725436800,
              "time": "2024-09-04 09:00",
              "temp_c": 17.6,
              "temp_f": 63.7
            },
            {
              "time_epoch": 1725440400,
              "time": "2024-09-04 10:00",
              "temp_c": 18.8,
              "temp_f": 65.9
            },
            {
              "time_epoch": 1725444000,
              "time": "2024-09-04 11:00",
              "temp_c": 19.8,
              "temp_f": 67.7
            },
            {
              "time_epoch": 1725447600,
              "time": "2024-09-04 12:00",
              "temp_c": 20.5,
              "temp_f": 69.0
            },
            {
              "time_epoch": 1725451200,
              "time": "2024-09-04 13:00",
              "temp_c": 18.2,
              "temp_f": 64.8
            },
            {
              "time_epoch": 1725454800,
              "time": "2024-09-04 14:00",
              "temp_c": 19.9,
              "temp_f": 67.9
            },
            {
              "time_epoch": 1725458400,
              "time": "2024-09-04 15:00",
              "temp_c": 19.2,
              "temp_f": 66.6
            },
            {
              "time_epoch": 1725462000,
              "time": "2024-09-04 16:00",
              "temp_c": 18.6,
              "temp_f": 65.4
            },
            {
              "time_epoch": 1725465600,
              "time": "2024-09-04 17:00",
              "temp_c": 18.0,
              "temp_f": 64.3
            },
            {
              "time_epoch": 1725469200,
              "time": "2024-09-04 18:00",
              "temp_c": 17.4,
              "temp_f": 63.2
            },
            {
              "time_epoch": 1725472800,
              "time": "2024-09-04 19:00",
              "temp_c": 16.8,
              "temp_f": 62.2
            },
            {
              "time_epoch": 1725476400,
              "time": "2024-09-04 20:00",
              "temp_c": 16.6,
              "temp_f": 61.9
            },
            {
              "time_epoch": 1725480000,
              "time": "2024-09-04 21:00",
              "temp_c": 16.3,
              "temp_f": 61.4
            },
            {
              "time_epoch": 1725483600,
              "time": "2024-09-04 22:00",
              "temp_c": 16.1,
              "temp_f": 60.9
            },
            {
              "time_epoch": 1725487200,
              "time": "2024-09-04 23:00",
              "temp_c": 15.3,
              "temp_f": 59.6
            }
          ]
        }
      ]
    }
  }
]

const cityResults = [
  {
    "id": 2801268,
    "name": "London",
    "region": "City of London, Greater London",
    "country": "United Kingdom",
    "lat": 51.52,
    "lon": -0.11,
    "url": "london-city-of-london-greater-london-united-kingdom"
  },
  {
    "id": 2548753,
    "name": "Long Beach",
    "region": "California",
    "country": "United States of America",
    "lat": 33.77,
    "lon": -118.19,
    "url": "long-beach-california-united-states-of-america"
  },
  {
    "id": 279381,
    "name": "Londrina",
    "region": "Parana",
    "country": "Brazil",
    "lat": -23.3,
    "lon": -51.15,
    "url": "londrina-parana-brazil"
  },
  {
    "id": 315398,
    "name": "London",
    "region": "Ontario",
    "country": "Canada",
    "lat": 42.98,
    "lon": -81.25,
    "url": "london-ontario-canada"
  },
  {
    "id": 2722776,
    "name": "Long Xuyen",
    "region": "",
    "country": "Vietnam",
    "lat": 10.38,
    "lon": 105.42,
    "url": "long-xuyen-vietnam"
  }
]
