import { useEffect, useState } from "react";

export const Input = () => {

  const[date,setDate] = useState(new Date())

  let x1 = 50;
  let y1 = 50
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

  let currentHour = date.getHours();
  let currentMinutes = date.getMinutes();
  let currentSecs = date.getSeconds();

  let sec = setSecsMinsHoursClocknumAttributes(((2 * Math.PI * currentSecs) / 60), 40);

  let min = setSecsMinsHoursClocknumAttributes((2 * Math.PI * (currentMinutes + currentSecs / 60)) / 60, 35);
  
  let hour = setSecsMinsHoursClocknumAttributes((2 * Math.PI * (currentHour + currentMinutes / 60)) / 12, 25);
  

  return (
    <>
      <div className="center">
        <svg className="clock" viewBox="0 0 100 100">
          <circle className="circle" cx="50" cy="50" r="40"></circle>
          <circle className="inner-circle" cx="50" cy="50" r="3.5"></circle>
          <line id="second-line" x1="50" y1="50" x2={sec.x} y2={sec.y}></line>
          <line id="minute-line" x1="50" y1="50" x2={min.x} y2={min.y}></line>
          <line id="hour-line" x1="50" y1="50" x2={hour.x} y2={hour.y}></line>
        </svg>
      </div>

      <div className="center" id="current-time"></div>
    </>
  )
}