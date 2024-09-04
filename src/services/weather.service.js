import { httpService } from "./http.service"

export const weatherService = {
    query,
    getByCity,
}

function query(searchValue) {
    return httpService.get(`weather/search`, { q: searchValue })
}

function getByCity(cityName) {
    return httpService.get(`weather/forecast`, { q: cityName })
}
