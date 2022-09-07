import { format } from "date-fns"

export const DailyWeather = (props) => {

// const arrayDailyData = props.dailyData
// console.log(props.dailyData)
// console.log(arrayDailyData[0].time.value)

  console.log(props.dailyData)
  return(
  <>
  {props.dailyData &&
  <div className="daily-weather">
    <div className="select-date">
      <div className="day-before"></div>
      <div>{format(props.dailyData[0].time.value,"ccc, do MMM yyyy")}</div>
      <div className="day-after"></div>
    </div>
  </div>
}
  </>)
}