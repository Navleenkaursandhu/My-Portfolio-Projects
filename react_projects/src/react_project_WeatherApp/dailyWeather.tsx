import { format } from "date-fns"
import { useEffect, useState } from "react"

let index = 0
export const DailyWeather = (props) => {

  // const arrayDailyData = props.dailyData
  // console.log(props.dailyData)
  // console.log(arrayDailyData[0].time.value)

  console.log(props.dailyData)
  if (props.dailyData !== undefined) {
    const [index, setIndex] = useState(0)
    const [date, setDate] = useState(format(props.dailyData[index].time.value, "ccc, do MMM yyyy"))
    



    console.log(index)
    const dayBefore = () => {
      console.log(index)
      if (index > 0) {
        setIndex(prev => prev - 1)
        //setDate(format(props.dailyData[index].time.value, "ccc, do MMM yyyy"))
      }
    }

    useEffect(() => {
      setDate(format(props.dailyData[index].time.value, "ccc, do MMM yyyy"))
    }, [index])

    const dayAfter = () => {
      console.log(index)
      if (index < 6) {
        setIndex(prev => prev + 1)
        //setDate(format(props.dailyData[index].time.value, "ccc, do MMM yyyy"))
      }
    }
    return (
      <>
        {props.dailyData &&
          <div className="daily-weather">
            <div className="select-date">
              <div className="day-before">
                <span onClick={() => dayBefore()} className="material-symbols-rounded">
                  arrow_back_ios
                </span>
              </div>
              <div className="day-date-today">{date}</div>
              <div className="day-after">
                <span onClick={() => dayAfter()} className="material-symbols-rounded">
                  arrow_forward_ios
                </span>
              </div>
            </div>
          </div>
        }
      </>)
  }
}