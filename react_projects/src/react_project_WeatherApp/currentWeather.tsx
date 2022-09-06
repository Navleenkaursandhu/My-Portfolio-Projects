import {codes} from './weathercodes'
export const CurrentWeather = (props) => {

  console.log(props.currentData)
  console.log(props.rawData)
  console.log(codes)
  return (

    <div className="current-weather">
      {props.rawData && <div className="current-zone">Time Zone: {props.rawData.timezone}</div>}
      {props.currentData && <div className="current-temperature">{props.currentData.temperature.value}
        <span>{props.currentData && props.currentData.temperature.unit}</span>
      </div>
      }

     {props.ata && props.currentData.weathercode.value !== undefined && 
      <div className='current-weather-code'>
        {codes[props.currentData.weathercode.value]}
      </div>}


      {props.currentData && <div className="current-windspeed">Wind Speed:   {props.currentData.windspeed.value}
        <span>{props.currentData && props.currentData.windspeed.unit}</span>
      </div>
      }
    </div>

  )
}