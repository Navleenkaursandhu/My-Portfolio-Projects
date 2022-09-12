import { useEffect, useState } from 'react'

export const Input = () => {
  const [date, setDate] = useState(new Date())

  const displayTime = () => {
    setDate(new Date())
  }

  useEffect(() => {
    const intervalHandle = setInterval(displayTime, 1000)
    return () => {
      clearInterval(intervalHandle)
    }
  }, [])

  const currentHour = date.getHours().toString().padStart(2, '0')
  const currentMinute = date.getMinutes().toString().padStart(2, '0')
  const currentSec = date.getSeconds().toString().padStart(2, '0')

  return (
    <>
      <div className="flex-column-container">
        <div className="flex-row-container">

          <div id="hour-first" className="flex-column-digit">
            <div className={`top-segment num${currentHour[0]}`}></div>
            <div className={`bottom-segment num${currentHour[0]}`}></div>
          </div>

          <div id="hour-second" className="flex-column-digit">
            <div className={`top-segment num${currentHour[1]}`}></div>
            <div className={`bottom-segment num${currentHour[1]}`}></div>
          </div>

          <div className="flex-colon-container">
            <div className="top-colon-segment"></div>
            <div className="bottom-colon-segment"></div>
          </div>

          <div id="min-first" className="flex-column-digit">
            <div className={`top-segment num${currentMinute[0]}`}></div>
            <div className={`bottom-segment num${currentMinute[0]}`}></div>
          </div>

          <div id="min-second" className="flex-column-digit">
            <div className={`top-segment num${currentMinute[1]}`}></div>
            <div className={`bottom-segment num${currentMinute[1]}`}></div>
          </div>

          <div id="sec-first" className="flex-column-digit">
            <div className={`top-segment num${currentSec[0]} top-small-segment`}></div>
            <div className={`bottom-segment num${currentSec[0]} bottom-small-segment`}></div>
          </div>

          <div id="sec-second" className="flex-column-digit">
            <div className={`top-segment num${currentSec[1]} top-small-segment`}></div>
            <div className={`bottom-segment num${currentSec[1]} bottom-small-segment`}></div>
          </div>

        </div>
      </div>
    </>
  )
}
