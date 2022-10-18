import { format } from 'date-fns'
import { codes } from './weathercodes'
export const CurrentWeather = (props) => {
  return (
    <div className="mt-[20px] mr-[10px] mb-[10px] ml-[10px] text-center flex flex-col gap-[4px]">

      {!!props.currentData && <div className='lg:text-[32px] md:text-[32px] text-[26px] mb-[10px]'>WEATHER FORECAST</div>}

      {!!props.currentData && <div className="lg:text-[44px] md:text-[44px] text-[30px]">{props.currentData.temperature.value}
        <span>{props.currentData.temperature.unit}</span>
      </div>
      }

      {!!props.rawData && props.currentData.weathercode.value !== undefined &&
        <div className='lg:text-[30px] md:text-[30px] text-[22px] flex items-center justify-center gap-[14px]'>
          <span className='lg:text-[54px] md:text-[54px] text-[38px] material-symbols-rounded'>{codes[props.currentData.weathercode.value].icon}</span>
          {codes[props.currentData.weathercode.value].value}
        </div>}

      {!!props.rawData && <div className="lg:text-[24px] md:text-[24px] text-[22px]">{props.rawData.timezone}</div>}

      {!!props.currentData && <div className="lg:text-[20px] md:text-[20px] text-[18px]">Wind Speed:   {props.currentData.windspeed.value}
        <span>{props.currentData.windspeed.unit}</span>
      </div>
      }

      {!!props.currentData && <div className="lg:text-[20px] md:text-[20px] text-[18px]">Last Updated at {format(props.currentData.time.value, 'HH:mm')}</div>}

    </div>
  )
}
