import { defineStore } from 'pinia'
import { type WeatherResult} from '@/types'

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    currentLocation: 'Tokyo',
    locations: ['Tokyo', 'Singapore', 'Kuala Lumpur', 'New York', 'San Francisco', 'London', 'Melbourne', 'Sydney'],
    currentLocationDetails: {} as WeatherResult
  }),
  actions: {
    async getWeather() {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.currentLocation}&appid=5a17e86b65c30e610db2711d73c52d11&units=metric`)

      const weatherData = await response.json();
      this.currentLocationDetails = weatherData
    },
    async getLocations() {
      // TODO
      // get locations and save to state
    } 
  }
})
