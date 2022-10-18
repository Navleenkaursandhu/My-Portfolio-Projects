import { CurrentWeather } from './currentWeather'
import { DailyWeather } from './dailyWeather'
export const DisplayWeather = (props) => {
  console.log(props.data)
  return (
    <div className="flex-col flex xl:w-2/5 lg:w-1/2 md:w-4/6 w-full lg:my-[35px] lg:mr-[20px] lg:ml-[0px] md:my-[35px] md:mr-[20px] md:ml-[0px] sm:m-16 m-1 bg-[#ffffff30] rounded-[16px] border border-[#ffffff40] overflow-auto backdrop-blur">
      <CurrentWeather currentData={props.data.currentWeather} rawData={props.data.raw} />
      <DailyWeather dailyData={props.data.dailyWeather} hourlyData={props.data.hourlyWeather} />
    </div>
  )
}
