export const utilService = {
    saveToStorage,
    loadFromStorage,
    formatDate,
    formatTimestamp,
    formatCountryName
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}

function formatDate(date) {
    const d = new Date(date)

    const month = d.getMonth() + 1
    const day = d.getDate()
    const year = d.getFullYear()
    const hours = d.getHours()
    const minutes = d.getMinutes().toString().padStart(2, '0')

    // Expected "M/d/yyyy 'at' HH:mm"
    return `${month}/${day}/${year} at ${hours}:${minutes}`
}

function formatTimestamp(timestamp) {
    const date = new Date(timestamp * 1000)
    const hours = date.getUTCHours().toString().padStart(2, '0')
    const minutes = date.getUTCMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`
}


export function formatCountryName(countryCode) {
    try {
        const displayNames = new Intl.DisplayNames(['en'], { type: 'region' })
        return displayNames.of(countryCode)
    } catch (e) {
        console.error('Error formatting country name:', e)
        return 'Unknown Country'
    }
}
