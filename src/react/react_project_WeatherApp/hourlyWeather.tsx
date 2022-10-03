import { format } from 'date-fns'
import { codes } from './weathercodes'
export const HourlyWeather = (props) => {
  const hour = props.hour.time.value
  const temp = props.hour.temperature_2m.value
  const tempUnit = props.hour.temperature_2m.unit
  const apparentTemp = props.hour.apparentTemperature.value
  const apparentTempUnit = props.hour.apparentTemperature.unit
  const weathercode = props.hour.weathercode.value
  const windSpeed = props.hour.windspeed_10m.value
  const windSpeedUnit = props.hour.windspeed_10m.unit
  const rain = props.hour.rain.value
  const rainUnit = props.hour.rain.unit
  const snowfall = props.hour.snowfall.value
  const snowfallUnit = props.hour.snowfall.unit
  const isNight = (hour < props.daily_sunrise || hour > props.daily_sunset)
  const weatherCodeData = codes[weathercode]

  return (
    <>
      <div className="flex justify-center gap-[20px]">
        <div className="text-[28px] mt-[20px]">{format(hour, 'HH:mm')}</div>
        <div>
          <span className="text-[60px] material-symbols-rounded">
            {isNight
              ? weatherCodeData.nightIcon || weatherCodeData.icon
              : weatherCodeData.icon
            }
          </span>
        </div>

        <div className="flex flex-col gap-[10px] p-[10px]">

          <div className="show-weathercode">{weatherCodeData.value}</div>
          <div className="flex gap-[20px]">
            <div>Temperature: {temp}{tempUnit}</div>
            <div>Feels like {apparentTemp}{apparentTempUnit}</div>
          </div>

          <div className="show-windspeed">Windspeed: {windSpeed}{windSpeedUnit}</div>

          <div>Rain: {rain}{rainUnit}</div>
          <div>Snowfall: {snowfall}{snowfallUnit}</div>

        </div>
      </div>

      <div className='flex justify-center'>
        <hr className="w-[80%]"></hr>
      </div>
    </>
  )
}
