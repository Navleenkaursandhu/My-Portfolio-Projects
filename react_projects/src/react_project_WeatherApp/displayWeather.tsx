import { CurrentWeather } from './currentWeather'
import { DailyWeather } from './dailyWeather'
export const DisplayWeather = (props) => {
  console.log(props.data)
  return (
    <div className="weather">
      <CurrentWeather currentData={props.data.currentWeather} rawData={props.data.raw} />
      <DailyWeather dailyData={props.data.dailyWeather} hourlyData={props.data.hourlyWeather} />
    </div>
  )
}
