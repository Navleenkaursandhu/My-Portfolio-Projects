import { parseISO } from 'date-fns'
import { useEffect, useState } from 'react'
import { Background } from './background'

export const title = 'WEATHER FORECAST APPLICATION'
export const description = 'A dynamic Weather Forecast Application'
export const skills = ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'HTML', 'REST API', 'ESLint', 'Git', 'Github', 'VS Code']
export const date = 'September 2022'
export const link = './WeatherApp'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/react_projects/src/react_project_WeatherApp'

const getCurrentLocation = async () => {
  return await new Promise<GeolocationPosition>((resolve, reject) => navigator.geolocation.getCurrentPosition(
    data => resolve(data),
    err => reject(err)
  ))
}

export const Main = () => {
  const [weatherData, setWeatherData] = useState({})

  const getWeatherData = async () => {
    const currLocation = await getCurrentLocation()
    const lat = currLocation.coords.latitude
    const lon = currLocation.coords.longitude
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone

    const hourlyFields = [
      'temperature_2m',
      'windspeed_10m',
      'rain',
      'snowfall',
      'weathercode',
      'apparent_temperature'
    ]

    const dailyFields = [
      'temperature_2m_max',
      'temperature_2m_min',
      'windspeed_10m_max',
      'weathercode',
      'rain_sum',
      'snowfall_sum',
      'apparent_temperature_max',
      'apparent_temperature_min',
      'sunrise',
      'sunset'
    ]

    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=${hourlyFields.join(',')}&timezone=${zone}&daily=${dailyFields.join(',')}`)
    const data = await response.json()

    const finalData = {
      raw: data,

      currentWeather: {
        time: {
          value: parseISO(data.current_weather.time),
          unit: data.hourly_units.time
        },

        temperature: {
          value: data.current_weather.temperature,
          unit: data.hourly_units.temperature_2m
        },

        windspeed: {
          value: data.current_weather.windspeed,
          unit: data.hourly_units.windspeed_10m
        },

        weathercode: {
          value: data.current_weather.weathercode,
          unit: data.hourly_units.weathercode
        }
      },

      hourlyWeather: data.hourly.time.map((timeStr, i) => ({
        time: {
          value: parseISO(timeStr),
          unit: data.hourly_units.time
        },

        temperature_2m: {
          value: data.hourly.temperature_2m[i],
          unit: data.hourly_units.temperature_2m
        },

        windspeed_10m: {
          value: data.hourly.windspeed_10m[i],
          unit: data.hourly_units.windspeed_10m
        },

        rain: {
          value: data.hourly.rain[i],
          unit: data.hourly_units.rain
        },

        snowfall: {
          value: data.hourly.snowfall[i],
          unit: data.hourly_units.snowfall
        },

        weathercode: {
          value: data.hourly.weathercode[i],
          unit: data.hourly_units.weathercode
        },

        apparentTemperature: {
          value: data.hourly.apparent_temperature[i],
          unit: data.hourly_units.apparent_temperature
        }
      })),

      dailyWeather: data.daily.time.map((timeStr, i) => ({

        time: {
          value: parseISO(timeStr),
          unit: data.daily_units.time
        },

        temperature_2m_max: {
          value: data.daily.temperature_2m_max[i],
          unit: data.daily_units.temperature_2m_max
        },

        temperature_2m_min: {
          value: data.daily.temperature_2m_min[i],
          unit: data.daily_units.temperature_2m_min
        },

        windspeed_10m_max: {
          value: data.daily.windspeed_10m_max[i],
          unit: data.daily_units.windspeed_10m_max
        },

        rain: {
          value: data.daily.rain_sum[i],
          unit: data.daily_units.rain_sum
        },

        snowfall: {
          value: data.daily.snowfall_sum[i],
          unit: data.daily_units.snowfall_sum
        },

        weathercode: {
          value: data.daily.weathercode[i],
          unit: data.daily_units.weathercode
        },

        apparent_temperature_max: {
          value: data.daily.apparent_temperature_max[i],
          unit: data.daily_units.apparent_temperature_max
        },

        apparent_temperature_min: {
          value: data.daily.apparent_temperature_min[i],
          unit: data.daily_units.apparent_temperature_min
        },

        sunrise: {
          value: parseISO(data.daily.sunrise[i])
        },

        sunset: {
          value: parseISO(data.daily.sunset[i])
        }
      }))
    }
    setWeatherData(finalData)
  }

  useEffect(() => {
    void getWeatherData()
  }, [])

  return (
    <>
      <div className="font-applyBarlow font-bold">
        <Background data={weatherData} />
      </div>
    </>
  )
}
