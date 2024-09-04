import { utilService } from "./util.service"

const WEATHER_KEY = 'weatherDB'

export const weatherService = {
  query,
}

async function query(city) {

  let storedWeatherData = utilService.loadFromStorage(WEATHER_KEY) || []
  console.log('storedWeatherData: ', storedWeatherData)
  const cityWeather = storedWeatherData.find(item =>
    item.name.toUpperCase() === city.toUpperCase())

  if (cityWeather) {
    console.log('cityWeather: ', cityWeather)
    return cityWeather
  }

  // Hardcoded weather data for testing
  const hardcodedWeatherData = weatherData.find(item =>
    item.name.toUpperCase() === city.toUpperCase())

  console.log('hardcodedWeatherData: ', hardcodedWeatherData)

  if (hardcodedWeatherData) {

    storedWeatherData.push(hardcodedWeatherData)
    utilService.saveToStorage(WEATHER_KEY, storedWeatherData)
    console.log('hardcodedWeatherData: ', hardcodedWeatherData)

    return hardcodedWeatherData
  }

  throw new Error(`No weather data available for ${city}`)
}


async function getCities(query) {
  console.log('getCities: ', getCities)
}

const weatherData = [
  {
    "coord": {
      "lon": 34.8,
      "lat": 32.0833
    },
    "weather": [
      {
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 30.13,
      "feels_like": 32.11,
      "temp_min": 29.6,
      "temp_max": 30.14,
      "pressure": 1012,
      "humidity": 55,
      "sea_level": 1012,
      "grnd_level": 1009
    },
    "visibility": 10000,
    "wind": {
      "speed": 6.17,
      "deg": 340
    },
    "clouds": {
      "all": 20
    },
    "dt": 1725374338,
    "sys": {
      "type": 1,
      "id": 6845,
      "country": "IL",
      "sunrise": 1725333456,
      "sunset": 1725379382
    },
    "timezone": 10800,
    "id": 293396,
    "name": "Tel Aviv",
    "cod": 200,
    "forecast": [
      {
        "dt": 1725375600,
        "main": {
          "temp": 30.13,
          "feels_like": 32.11,
          "temp_min": 28.06,
          "temp_max": 30.13,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1009,
          "humidity": 55,
          "temp_kf": 2.07
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 20
        },
        "wind": {
          "speed": 4.99,
          "deg": 334,
          "gust": 4.86
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-09-03 15:00:00"
      },
      {
        "dt": 1725386400,
        "main": {
          "temp": 29.12,
          "feels_like": 31.08,
          "temp_min": 27.11,
          "temp_max": 29.12,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1010,
          "humidity": 59,
          "temp_kf": 2.01
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 13
        },
        "wind": {
          "speed": 3.68,
          "deg": 345,
          "gust": 3.94
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2024-09-03 18:00:00"
      },
      {
        "dt": 1725397200,
        "main": {
          "temp": 27.72,
          "feels_like": 29.35,
          "temp_min": 26.52,
          "temp_max": 27.72,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1009,
          "humidity": 63,
          "temp_kf": 1.2
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 9
        },
        "wind": {
          "speed": 2.28,
          "deg": 344,
          "gust": 2.54
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2024-09-03 21:00:00"
      },
      {
        "dt": 1725408000,
        "main": {
          "temp": 26.1,
          "feels_like": 26.1,
          "temp_min": 26.1,
          "temp_max": 26.1,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 1009,
          "humidity": 69,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 6
        },
        "wind": {
          "speed": 2.45,
          "deg": 311,
          "gust": 2.86
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2024-09-04 00:00:00"
      },
      {
        "dt": 1725418800,
        "main": {
          "temp": 25.97,
          "feels_like": 25.97,
          "temp_min": 25.97,
          "temp_max": 25.97,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 1009,
          "humidity": 68,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 27
        },
        "wind": {
          "speed": 1.87,
          "deg": 308,
          "gust": 2.31
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2024-09-04 03:00:00"
      }
    ]
  },
  {
    "coord": {
      "lon": -118.2437,
      "lat": 34.0522
    },
    "weather": [
      {
        "id": 701,
        "main": "Mist",
        "description": "mist",
        "icon": "50d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 19.32,
      "feels_like": 19.61,
      "temp_min": 17.6,
      "temp_max": 22.47,
      "pressure": 1013,
      "humidity": 88,
      "sea_level": 1013,
      "grnd_level": 994
    },
    "visibility": 4023,
    "wind": {
      "speed": 2.06,
      "deg": 280
    },
    "clouds": {
      "all": 100
    },
    "dt": 1725374557,
    "sys": {
      "type": 1,
      "id": 4361,
      "country": "US",
      "sunrise": 1725370110,
      "sunset": 1725416171
    },
    "timezone": -25200,
    "id": 5368361,
    "name": "Los Angeles",
    "cod": 200,
    "forecast": [
      {
        "dt": 1725375600,
        "main": {
          "temp": 19.34,
          "feels_like": 19.63,
          "temp_min": 19.34,
          "temp_max": 24.22,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 994,
          "humidity": 88,
          "temp_kf": -4.88
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 1.05,
          "deg": 217,
          "gust": 0.67
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-09-03 15:00:00"
      },
      {
        "dt": 1725386400,
        "main": {
          "temp": 22.93,
          "feels_like": 23.13,
          "temp_min": 22.93,
          "temp_max": 30.12,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 994,
          "humidity": 71,
          "temp_kf": -7.19
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 67
        },
        "wind": {
          "speed": 2.53,
          "deg": 241,
          "gust": 1.8
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-09-03 18:00:00"
      },
      {
        "dt": 1725397200,
        "main": {
          "temp": 27.44,
          "feels_like": 28,
          "temp_min": 27.44,
          "temp_max": 31.49,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 993,
          "humidity": 52,
          "temp_kf": -4.05
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 33
        },
        "wind": {
          "speed": 4.65,
          "deg": 239,
          "gust": 4.28
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-09-03 21:00:00"
      },
      {
        "dt": 1725408000,
        "main": {
          "temp": 31.5,
          "feels_like": 30.37,
          "temp_min": 31.5,
          "temp_max": 31.5,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 991,
          "humidity": 31,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.32,
          "deg": 236,
          "gust": 5.32
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-09-04 00:00:00"
      },
      {
        "dt": 1725418800,
        "main": {
          "temp": 29.27,
          "feels_like": 28.16,
          "temp_min": 29.27,
          "temp_max": 29.27,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 991,
          "humidity": 31,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.52,
          "deg": 165,
          "gust": 3.05
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2024-09-04 03:00:00"
      }
    ]
  },
  {
    "coord": {
      "lon": -118.3267,
      "lat": 34.0983
    },
    "weather": [
      {
        "id": 701,
        "main": "Mist",
        "description": "mist",
        "icon": "50d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 19.46,
      "feels_like": 19.65,
      "temp_min": 17.47,
      "temp_max": 22.33,
      "pressure": 1013,
      "humidity": 84,
      "sea_level": 1013,
      "grnd_level": 991
    },
    "visibility": 10000,
    "wind": {
      "speed": 2.06,
      "deg": 280
    },
    "clouds": {
      "all": 0
    },
    "dt": 1725374778,
    "sys": {
      "type": 1,
      "id": 3514,
      "country": "US",
      "sunrise": 1725370128,
      "sunset": 1725416194
    },
    "timezone": -25200,
    "id": 5357527,
    "name": "Hollywood",
    "cod": 200,
    "forecast": [
      {
        "dt": 1725375600,
        "main": {
          "temp": 19.46,
          "feels_like": 19.65,
          "temp_min": 19.46,
          "temp_max": 24.53,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 991,
          "humidity": 84,
          "temp_kf": -5.07
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.16,
          "deg": 215,
          "gust": 0.74
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-09-03 15:00:00"
      },
      {
        "dt": 1725386400,
        "main": {
          "temp": 22.95,
          "feels_like": 23.1,
          "temp_min": 22.95,
          "temp_max": 29.93,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 991,
          "humidity": 69,
          "temp_kf": -6.98
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.3,
          "deg": 229,
          "gust": 1.67
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-09-03 18:00:00"
      },
      {
        "dt": 1725397200,
        "main": {
          "temp": 27.45,
          "feels_like": 28.01,
          "temp_min": 27.45,
          "temp_max": 31.44,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 990,
          "humidity": 52,
          "temp_kf": -3.99
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 2
        },
        "wind": {
          "speed": 4.09,
          "deg": 225,
          "gust": 3.89
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-09-03 21:00:00"
      },
      {
        "dt": 1725408000,
        "main": {
          "temp": 32.67,
          "feels_like": 31.47,
          "temp_min": 32.67,
          "temp_max": 32.67,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 988,
          "humidity": 29,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 2
        },
        "wind": {
          "speed": 3.95,
          "deg": 231,
          "gust": 4.67
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-09-04 00:00:00"
      },
      {
        "dt": 1725418800,
        "main": {
          "temp": 30.99,
          "feels_like": 29.47,
          "temp_min": 30.99,
          "temp_max": 30.99,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 989,
          "humidity": 27,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 0.94,
          "deg": 174,
          "gust": 2.56
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2024-09-04 03:00:00"
      }
    ]
  }
]