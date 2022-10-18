import { format } from 'date-fns'
import { codes } from './weathercodes'
export const CurrentWeather = (props) => {
  return (
    <div className="mt-[20px] mr-[10px] mb-[10px] ml-[10px] text-center flex flex-col gap-[4px]">

      {!!props.currentData && <div className='text-4xl mb-[10px]'>WEATHER FORECAST</div>}

      {!!props.currentData && <div className="text-[46px]">{props.currentData.temperature.value}
        <span>{props.currentData.temperature.unit}</span>
      </div>
      }

      {!!props.rawData && props.currentData.weathercode.value !== undefined &&
        <div className='text-3xl flex items-center justify-center gap-[14px]'>
          <span className='text-6xl material-symbols-rounded'>{codes[props.currentData.weathercode.value].icon}</span>
          {codes[props.currentData.weathercode.value].value}
        </div>}

      {!!props.rawData && <div className="text-3xl">{props.rawData.timezone}</div>}

      {!!props.currentData && <div className="text-2xl">Wind Speed:   {props.currentData.windspeed.value}
        <span>{props.currentData.windspeed.unit}</span>
      </div>
      }

      {!!props.currentData && <div className="text-xl">Last Updated at {format(props.currentData.time.value, 'HH:mm')}</div>}

    </div>
  )
}
