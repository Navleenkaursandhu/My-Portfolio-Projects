import { format } from "date-fns"
import { useEffect, useState } from "react"
import { HourlyWeather } from "./hourlyWeather"
import { codes } from "./weathercodes"

export const DailyWeather = (props) => {
  const [index, setIndex] = useState(0)

  if (props.dailyData !== undefined) {

    const dayBefore = () => {
      console.log(index)
      if (index > 0) {
        setIndex(prev => prev - 1)
      }
    }

    const dayAfter = () => {
      console.log(index)
      if (index < 6) {
        setIndex(prev => prev + 1)
      }
    }

    const date = format(props.dailyData[index].time.value, "ccc, do MMM yyyy");
    const temp_min = props.dailyData[index].temperature_2m_min.value
    const temp_min_unit = props.dailyData[index].temperature_2m_min.unit
    const temp_max = props.dailyData[index].temperature_2m_max.value
    const temp_max_unit = props.dailyData[index].temperature_2m_max.unit
    const apparent_temp_min = props.dailyData[index].apparent_temperature_min.value
    const apparent_temp_min_unit = props.dailyData[index].apparent_temperature_min.unit
    const apparent_temp_max = props.dailyData[index].apparent_temperature_max.value
    const apparent_temp_max_unit = props.dailyData[index].apparent_temperature_max.unit
    const weatherCode = props.dailyData[index].weathercode.value
    const windSpeed = props.dailyData[index].windspeed_10m_max.value
    const windSpeed_unit = props.dailyData[index].windspeed_10m_max.unit
    const rain = props.dailyData[index].rain.value
    const rain_unit = props.dailyData[index].rain.unit
    const snowFall = props.dailyData[index].snowfall.value
    const snowFall_unit = props.dailyData[index].snowfall.unit

    return (
      <>

        {props.dailyData &&
          <div className="daily-weather">
            <div className="daily-forecast-title">7-DAY FORECAST</div>
            <div className="select-date">
              <div className="day-before">
                <span onClick={() => dayBefore()} className="material-symbols-rounded">
                  arrow_back_ios
                </span>
              </div>
              <div className="day-date-today">{date}</div>
              <div className="day-after">
                <span onClick={() => dayAfter()} className="material-symbols-rounded">
                  arrow_forward_ios
                </span>
              </div>
            </div>

            <div className="display-daily-data">

              <div className="show-temp-data">
                <div>
                  <span className=" show-icon material-symbols-rounded">
                    {codes[weatherCode].icon}
                  </span>
                </div>
                <div className="show-data">
                  <div className="min-temp">
                    <div>Min Temperature: {temp_min}{temp_min_unit}</div>
                    <div>Feels like {apparent_temp_min}{apparent_temp_min_unit}</div>
                  </div>

                  <div className="max-temp">
                    <div>Max Temperature: {temp_max}{temp_max_unit}</div>
                    <div>Feels like {apparent_temp_max}{apparent_temp_max_unit}</div>
                  </div>
                </div>
              </div>

              <div className="show-weathercode">{codes[weatherCode].value}</div>

              <div className="show-windspeed">Windspeed: {windSpeed}{windSpeed_unit}</div>

              <div className="show-extra-data">
                <div>Rain: {rain}{rain_unit}</div>
                <div>Snowfall: {snowFall}{snowFall_unit}</div>
              </div>
            </div>

            <HourlyWeather />

          </div>
        }
      </>)
  }
}