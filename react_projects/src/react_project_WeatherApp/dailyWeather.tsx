import { format, isSameDay } from 'date-fns'
import { useState } from 'react'
import { HourlyWeather } from './hourlyWeather'
import { codes } from './weathercodes'

export const DailyWeather = (props) => {
  const [index, setIndex] = useState(0)

  if (props.dailyData !== undefined) {
    const dayBefore = () => {
      if (index > 0) {
        setIndex(prev => prev - 1)
      }
    }

    const dayAfter = () => {
      if (index < 6) {
        setIndex(prev => prev + 1)
      }
    }

    const date = format(props.dailyData[index].time.value, 'ccc, do MMM yyyy')
    const tempMin = props.dailyData[index].temperature_2m_min.value
    const tempMinUnit = props.dailyData[index].temperature_2m_min.unit
    const tempMax = props.dailyData[index].temperature_2m_max.value
    const tempMaxUnit = props.dailyData[index].temperature_2m_max.unit
    const apparentTempMin = props.dailyData[index].apparent_temperature_min.value
    const apparentTempMinUnit = props.dailyData[index].apparent_temperature_min.unit
    const apparentTempMax = props.dailyData[index].apparent_temperature_max.value
    const apparentTempMaxUnit = props.dailyData[index].apparent_temperature_max.unit
    const weatherCode = props.dailyData[index].weathercode.value
    const windSpeed = props.dailyData[index].windspeed_10m_max.value
    const windSpeedUnit = props.dailyData[index].windspeed_10m_max.unit
    const rain = props.dailyData[index].rain.value
    const rainUnit = props.dailyData[index].rain.unit
    const snowFall = props.dailyData[index].snowfall.value
    const snowFallUnit = props.dailyData[index].snowfall.unit

    const hourlyArray = props.hourlyData.filter((object, i) => {
      return isSameDay(props.dailyData[index].time.value, object.time.value)
    })

    return (
      <>
        {props.dailyData &&
          <div className="daily-weather">
            <div className="daily-forecast-title">
              <span className="daily material-symbols-rounded">
                calendar_month
              </span>7-DAY FORECAST</div>
            <div className="select-date">
              <div className="day-before">
                <span onClick={() => dayBefore()} className="day-before material-symbols-rounded">
                  arrow_back_ios
                </span>
              </div>
              <div className="day-date-today">{date}</div>
              <div className="day-after">
                <span onClick={() => dayAfter()} className="day-after material-symbols-rounded">
                  arrow_forward_ios
                </span>
              </div>
            </div>

            <div className="display-daily-data">

              <div className="show-temp-data">

                <div>
                  <span className="show-icon material-symbols-rounded">
                    {codes[weatherCode].icon}
                  </span>
                </div>

                <div className="show-data">
                  <div className="show-weathercode">{codes[weatherCode].value}</div>

                  <div className="min-temp">
                    <div>Min Temperature: {tempMin}{tempMinUnit}</div>
                    <div>Feels like {apparentTempMin}{apparentTempMinUnit}</div>
                  </div>

                  <div className="max-temp">
                    <div>Max Temperature: {tempMax}{tempMaxUnit}</div>
                    <div>Feels like {apparentTempMax}{apparentTempMaxUnit}</div>
                  </div>

                  <div className="show-windspeed">Windspeed: {windSpeed}{windSpeedUnit}</div>

                  <div>Rain: {rain}{rainUnit}</div>
                  <div>Snowfall: {snowFall}{snowFallUnit}</div>

                </div>
              </div>
            </div>

            <div className="hourly-weather">
              <div className="hourly-forecast-title">
                <span className="hourly material-symbols-rounded">
                  schedule
                </span>HOURLY FORECAST</div>
              {hourlyArray.map((obj, i) => {
                return <div className="display-hourly-data" key={i}>
                  <HourlyWeather hour={obj} daily_sunrise={props.dailyData[index].sunrise.value} daily_sunset={props.dailyData[index].sunset.value} />
                </div>
              })}
            </div>
          </div>
        }
      </>)
  }
}
