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

    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=${true}&hourly=temperature_2m,windspeed_10m,rain,snowfall,weathercode,apparent_temperature&daily(timezone)=temperature_2m_max,temperature_2m_min,windspeed_10m_max,weathercode,rain_sum,snowfall_sum,showers_sum,apparent_temperature_max,apparent_temperture_min`)
    const data = await response.json()
    console.log(data)

    const finalData = {
      raw: data,
      hourlyData: data.hourly.time.map((time, i) => ({
        time: new Date(time),
        temperature: {
          value: data.hourly.temperature_2m[i],
          unit: data.hourly_units.temperature_2m,
        },
      }))

      //currentData: data.current_weather
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