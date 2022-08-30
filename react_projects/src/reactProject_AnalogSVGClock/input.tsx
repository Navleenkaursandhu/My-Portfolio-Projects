import { useEffect, useState } from "react";

export const Input = () => {

  const x1 = 50;
  const y1 = 50;
  const [date, setDate] = useState(new Date())

  const setSecsMinsHoursClocknumAttributes = (alpha, length) => {
    let xPoint = Math.sin(alpha) * length + x1;
    let yPoint = -(Math.cos(alpha) * length) + y1;
    return {
      x: xPoint,
      y: yPoint,
    }
  }

  const displayTime = () => {
    setDate(new Date())
  }

  useEffect(() => {
    let time = setInterval(displayTime, 1000)

    return () => {
      clearInterval(time)
    }
  }, [])

  const currentHour = date.getHours();
  const currentMinutes = date.getMinutes();
  const currentSecs = date.getSeconds();

  const sec = setSecsMinsHoursClocknumAttributes(((2 * Math.PI * currentSecs) / 60), 40);

  const min = setSecsMinsHoursClocknumAttributes((2 * Math.PI * (currentMinutes + currentSecs / 60)) / 60, 35);

  const hour = setSecsMinsHoursClocknumAttributes((2 * Math.PI * (currentHour + currentMinutes / 60)) / 12, 25);

  const currentDateandTime = date.toLocaleString()

  return (
    <>
      <div className="center">
        <svg className="clock" viewBox="0 0 100 100">
          <circle className="circle" cx="50" cy="50" r="40"></circle>
          <circle className="inner-circle" cx="50" cy="50" r="3.5"></circle>
          <line id="second-line" x1="50" y1="50" x2={sec.x} y2={sec.y}></line>
          <line id="minute-line" x1="50" y1="50" x2={min.x} y2={min.y}></line>
          <line id="hour-line" x1="50" y1="50" x2={hour.x} y2={hour.y}></line>

          {Array(12).fill(0).map((e, i) => {
            if (i % 3 === 0) {
              let clockNumOuter1 = setSecsMinsHoursClocknumAttributes((Math.PI / 6 * i), 40)
              let clockNumInner2 = setSecsMinsHoursClocknumAttributes((Math.PI / 6 * i), 30)
              return <line className="clock-nums" x1={clockNumOuter1.x} y1={clockNumOuter1.y} x2={clockNumInner2.x} y2={clockNumInner2.y}></line>
            }
            else {
              let clockNumOuter1 = setSecsMinsHoursClocknumAttributes((Math.PI / 6 * i), 40)
              let clockNumInner2 = setSecsMinsHoursClocknumAttributes((Math.PI / 6 * i), 34)
              return <line className="clock-nums" x1={clockNumOuter1.x} y1={clockNumOuter1.y} x2={clockNumInner2.x} y2={clockNumInner2.y}></line>
            }
          })}
        </svg>
      </div>

      <div className="center" id="current-time">{currentDateandTime}</div>
    </>
  )
}