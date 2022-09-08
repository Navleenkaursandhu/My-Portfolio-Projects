import { format } from "date-fns"
import { codes } from "./weathercodes"
export const HourlyWeather = (props) => {

  console.log(props)
  console.log(props.hour.temperature_2m)
  const hour = props.hour.time.value
  const temp = props.hour.temperature_2m.value
  const temp_unit = props.hour.temperature_2m.unit
  const apparent_temp = props.hour.apparentTemperature.value
  const apparent_temp_unit = props.hour.apparentTemperature.unit
  const weathercode = props.hour.weathercode.value
  const windSpeed = props.hour.windspeed_10m.value
  const windSpeed_unit = props.hour.windspeed_10m.unit
  const rain = props.hour.rain.value
  const rain_unit = props.hour.rain.unit
  const snowfall = props.hour.snowfall.value
  const snowfall_unit = props.hour.snowfall.unit

  console.log(weathercode)
  return (
    <>

      <div className="show-temp-data">
        <div className="hour">{format(hour, "HH:mm")}</div>
        <div>
          {(format(hour, "HH:mm") > props.daily_sunrise && 
          format(hour, "HH:mm") < props.daily_sunset) ?
          <span className="show-icon material-symbols-rounded">
          {codes[weathercode].icon}
        </span> : <span className="show-icon material-symbols-rounded">
          clear_night
        </span> }
          
        </div>
        <div className="show-data">
          <div className="hourly-temp">
            <div>Temperature: {temp}{temp_unit}</div>
            <div>Feels like {apparent_temp}{apparent_temp_unit}</div>
          </div>
        </div>
      </div>

      <div className="show-weathercode">{codes[weathercode].value}</div>

      <div className="show-windspeed">Windspeed: {windSpeed}{windSpeed_unit}</div>

      <div className="show-extra-data">
        <div>Rain: {rain}{rain_unit}</div>
        <div>Snowfall: {snowfall}{snowfall_unit}</div>
      </div>

      <hr className="hr"></hr>
    </>
  )
}