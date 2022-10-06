import { format } from 'date-fns'
import { codes } from './weathercodes'
export const CurrentWeather = (props) => {
  return (
    <div className="mt-[20px] mr-[10px] mb-[10px] ml-[10px] text-center flex flex-col gap-[4px]">

      {!!props.currentData && <div className='text-[32px] mb-[10px]'>WEATHER FORECAST</div>}

      {!!props.currentData && <div className="text-[44px]">{props.currentData.temperature.value}
        <span>{props.currentData.temperature.unit}</span>
      </div>
      }

      {!!props.rawData && props.currentData.weathercode.value !== undefined &&
        <div className='text-[30px] flex items-center justify-center gap-[14px]'>
          <span className='text-[54px] material-symbols-rounded'>{codes[props.currentData.weathercode.value].icon}</span>
          {codes[props.currentData.weathercode.value].value}
        </div>}

      {!!props.rawData && <div className="text-[24px]">{props.rawData.timezone}</div>}

      {!!props.currentData && <div className="text-[20px]">Wind Speed:   {props.currentData.windspeed.value}
        <span>{props.currentData.windspeed.unit}</span>
      </div>
      }

      {!!props.currentData && <div className="text-[20px]">Last Updated at {format(props.currentData.time.value, 'HH:mm')}</div>}

    </div>
  )
}
