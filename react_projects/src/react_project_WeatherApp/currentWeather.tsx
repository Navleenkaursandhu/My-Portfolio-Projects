import { format } from 'date-fns'
import { codes } from './weathercodes'
export const CurrentWeather = (props) => {

  const updateHour = format(props.currentData.time.value, "HH:mm")

  return (
    <div className="current-weather">

      <div className='heading'>WEATHER FORECAST</div>

      {props.currentData && <div className="current-temperature">{props.currentData.temperature.value}
        <span>{props.currentData && props.currentData.temperature.unit}</span>
      </div>
      }

      {props.rawData && props.currentData.weathercode.value !== undefined &&
        <div className='current-weather-code'>
          <span className='current-weather-code material-symbols-rounded'>{codes[props.currentData.weathercode.value].icon}</span>
          {codes[props.currentData.weathercode.value].value}
        </div>}

      {props.rawData && <div className="current-zone">{props.rawData.timezone}</div>}

      {props.currentData && <div className="current-windspeed">Wind Speed:   {props.currentData.windspeed.value}
        <span>{props.currentData && props.currentData.windspeed.unit}</span>
      </div>
      }

      <div className="update-hour">"Last Updated at {updateHour}"</div>
    </div>
  )
}