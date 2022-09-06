import { useEffect, useState } from "react";

const API_KEY = "8569575b243a97e9bbe5aee8bc42af6b"

const getCurrentLocation = async () => {
  return new Promise<GeolocationPosition>((resolve, reject) => navigator.geolocation.getCurrentPosition(
    data => resolve(data),
    err => reject(err)
  ));
}

export const Main = () => {

  const [weatherData, setWeatherData] = useState(null)

  const getWeatherData = async () => {
    const currLocation = await getCurrentLocation()
    console.log(currLocation)

    const lat = currLocation.coords.latitude
    const lon = currLocation.coords.longitude
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone

    const hourlyFields = [
      "temperature_2m",
      "windspeed_10m",
      "rain,snowfall",
      "weathercode",
      "apparent_temperature"
    ]

    const dailyFields = [
      "temperature_2m_max",
      "temperature_2m_min",
      "windspeed_10m_max",
      "weathercode",
      "rain_sum",
      "snowfall_sum",
      "showers_sum",
      "apparent_temperature_max",
      "apparent_temperature_min"
    ]

    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=${true}&hourly=${hourlyFields.join(",")}&timezone=${zone}&daily=${dailyFields.join(",")}`)
    const data = await response.json()
    console.log(data)

    const finalData = {
      raw: data,
      hourlyData: data.hourly.time.map((timeStr, i) => ({
        time: {
          value: new Date(timeStr),
          unit: data.hourly_units.time
        },

        temperature: {
          value: data.hourly.temperature_2m[i],
          unit: data.hourly_units.temperature_2m,
        },
 
        hourlyWindspeed: {
          value: data.hourly.windspeed_10m[i],
          unit: data.hourly_units.windspeed_10m
        },

        hourlyRain: {
          value: data.hourly.rain[i],
          unit: data.hourly_units.rain
        },

        hourlySnowfall: {
          value: data.hourly.snowfall[i],
          unit: data.hourly_units.snowfall
        },

        hourlyWeathercode: {
          value: data.hourly.weathercode[i],
          unit: data.hourly_units.weathercode
        },

        hourlyApparentTemperature: {
          value: data.hourly.apparent_temperature[i],
          unit: data.hourly_units.apparent_temperature
        }


      }))


    };
    console.log(finalData)

  }


  useEffect(() => {
    getWeatherData()

  }, [])




  return (
    <>
      <div className="weather-app">

      </div>
    </>
  )
}