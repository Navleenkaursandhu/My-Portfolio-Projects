import { CurrentWeather } from './currentWeather'
import { DailyWeather } from './dailyWeather'
export const DisplayWeather = (props) => {
  console.log(props.data)
  return (
    <div className="flex-col flex w-[40%] my-[35px] mr-[20px] ml-[0px] bg-[#ffffff30] rounded-[16px] border border-[#ffffff40] overflow-auto backdrop-blur">
      <CurrentWeather currentData={props.data.currentWeather} rawData={props.data.raw} />
      <DailyWeather dailyData={props.data.dailyWeather} hourlyData={props.data.hourlyWeather} />
    </div>
  )
}
