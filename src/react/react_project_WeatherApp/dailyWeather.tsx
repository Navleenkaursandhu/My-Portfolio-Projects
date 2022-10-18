import { format, isSameDay } from 'date-fns'
import { useState } from 'react'
import { HourlyWeather } from './hourlyWeather'
import { codes } from './weathercodes'

export const DailyWeather = (props) => {
  const [index, setIndex] = useState(0)

  if (props.dailyData !== undefined) {
    const dayBefore = () => {
      if (index > 0) {
        setIndex(prev => prev - 1)
      }
    }

    const dayAfter = () => {
      if (index < 6) {
        setIndex(prev => prev + 1)
      }
    }

    const date = format(props.dailyData[index].time.value, 'ccc, do MMM yyyy')
    const tempMin = props.dailyData[index].temperature_2m_min.value
    const tempMinUnit = props.dailyData[index].temperature_2m_min.unit
    const tempMax = props.dailyData[index].temperature_2m_max.value
    const tempMaxUnit = props.dailyData[index].temperature_2m_max.unit
    const apparentTempMin = props.dailyData[index].apparent_temperature_min.value
    const apparentTempMinUnit = props.dailyData[index].apparent_temperature_min.unit
    const apparentTempMax = props.dailyData[index].apparent_temperature_max.value
    const apparentTempMaxUnit = props.dailyData[index].apparent_temperature_max.unit
    const weatherCode = props.dailyData[index].weathercode.value
    const windSpeed = props.dailyData[index].windspeed_10m_max.value
    const windSpeedUnit = props.dailyData[index].windspeed_10m_max.unit
    const rain = props.dailyData[index].rain.value
    const rainUnit = props.dailyData[index].rain.unit
    const snowFall = props.dailyData[index].snowfall.value
    const snowFallUnit = props.dailyData[index].snowfall.unit

    const hourlyArray = props.hourlyData.filter((object, i) => {
      return isSameDay(props.dailyData[index].time.value, object.time.value)
    })

    return (
      <>
        {props.dailyData &&
          <div className="p-[10px] m-[10px]">
            <div className="border-b-black border border-x-0 border-t-0 lg:text-[24px] md:text-[24px] text-[18px] flex items-center gap-[10px]">
              <span className="lg:text-[32px] md:text-[32px] text-3xl material-symbols-rounded">
                calendar_month
              </span>7-DAY FORECAST
            </div>
            <div className="p-[4px] flex justify-around items-center mt-[10px]">
              <div className="text-[28px] py-[4px] pr-[0px] pl-[4px]">
                <span onClick={() => dayBefore()} className="hover:cursor-pointer hover:bg-[#ffffff70] material-symbols-rounded">
                  arrow_back_ios
                </span>
              </div>
              <div className="lg:text-[28px] md:text-[28px] sm:text-[24px] text-[20px] py-[4px] pr-[0px] pl-[4px]">{date}</div>
              <div className="text-[28px] py-[4px] pr-[0px] pl-[4px]">
                <span onClick={() => dayAfter()} className="hover:cursor-pointer hover:bg-[#ffffff70] material-symbols-rounded">
                  arrow_forward_ios
                </span>
              </div>
            </div>

            <div className="p-[8px] lg:text-[20px] md:text-[20px] sm:text-[16px] text-[14px]">
              <div className="flex lg:flex-row md:flex-row flex-col lg:justify-center md:justify-center items-center lg:gap-[20px] md:gap-[20px]">
                <div>
                  <span className="lg:text-[60px] md:text-[60px] sm:text-[40px] text-[28px] material-symbols-rounded">
                    {codes[weatherCode].icon}
                  </span>
                </div>

                <div className="flex flex-col gap-[10px] p-[8px]">
                  <div>{codes[weatherCode].value}</div>

                  <div className="flex lg:flex-row md:flex-row flex-col justify-between lg:gap-[20px] md:gap-[20px]">
                    <div>Min Temp: {tempMin}{tempMinUnit}</div>
                    <div>Feels like {apparentTempMin}{apparentTempMinUnit}</div>
                  </div>

                  <div className="flex lg:flex-row md:flex-row flex-col justify-between lg:gap-[20px] md:gap-[20px]">
                    <div>Max Temp: {tempMax}{tempMaxUnit}</div>
                    <div>Feels like {apparentTempMax}{apparentTempMaxUnit}</div>
                  </div>

                  <div>Windspeed: {windSpeed}{windSpeedUnit}</div>

                  <div>Rain: {rain}{rainUnit}</div>
                  <div>Snowfall: {snowFall}{snowFallUnit}</div>

                </div>
              </div>
            </div>

            <div>
              <div className="border-b-black border border-x-0 border-t-0 lg:text-[24px] md:text-[24px] text-[18px] flex items-center gap-[10px]">
                <span className="lg:text-[32px] md:text-[32px] text-[26px] material-symbols-rounded">
                  schedule
                </span>HOURLY FORECAST</div>
              {hourlyArray.map((obj, i) => {
                return <div className="p-[8px] lg:text-[20px] md:text-[20px] sm:text-[16px] text-[14px]" key={i}>
                  <HourlyWeather hour={obj} daily_sunrise={props.dailyData[index].sunrise.value} daily_sunset={props.dailyData[index].sunset.value} />
                </div>
              })}
            </div>
          </div>
        }
      </>)
  }
}
