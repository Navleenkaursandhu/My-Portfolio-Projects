import { addDays, format, formatISO, isTomorrow, subDays } from 'date-fns'
import { useEffect, useState } from 'react'
import { Sheet } from './Sheet'

export const Header = () => {
  const [signInOutButton, setSignInOutButton] = useState(false)
  const [userEnteredTask, setUserEnteredTask] = useState('')
  const [timesheetEvents, setTimesheetEvents] = useState(
    () => {
      const saved = localStorage.getItem('eventEntered')
      return JSON.parse(saved) || {}
    }
  )

  const [date, setDate] = useState(new Date())
  const dateKey = formatISO(date, { representation: 'date' })

  const userEventType = signInOutButton ? 'SIGN OUT' : 'SIGN IN'

  const addEvent = (event) => {
    setTimesheetEvents((prev) => {
      return {
        ...prev,
        [dateKey]: (prev[dateKey] || []).concat(event)
      }
    })
  }

  const toggleButton = () => {
    setSignInOutButton(prev => !prev)
    addEvent({
      date: new Date(),
      description: signInOutButton ? userEnteredTask : '',
      eventType: userEventType
    })
  }

  const addTaskInSheet = () => {
    addEvent(
      {
        date: new Date(),
        description: signInOutButton ? userEnteredTask : '',
        eventType: ''
      }
    )
  }

  const dayBefore = () => {
    setDate((prev) => subDays(prev, 1))
  }

  const dayAfter = () => {
    setDate((prev) => {
      const newDate = addDays(prev, 1)
      return isTomorrow(newDate) ? prev : newDate
    }
    )
  }

  useEffect(() => {
    localStorage.setItem('eventEntered', JSON.stringify(timesheetEvents))
  }, [timesheetEvents])

  return (
    <>
      <div className='header-container'>
        <button onClick={() => toggleButton()} className='sign-in-out'>{userEventType}</button>
        {!signInOutButton && <div className='heading'>TIMESHEET</div>}
        {signInOutButton && <input onChange={(e) => setUserEnteredTask(e.target.value)} className="input-task" placeholder="Enter your task here"></input>}
        {signInOutButton && <button onClick={() => addTaskInSheet()} className="add-task-button">ADD TASK</button>}
        <div className='date-container'>
          <div onClick={() => dayBefore()} className='arrow-left'></div>
          <div className="current-date">Date: {format(date, 'do MMMM yyyy')}</div>
          <div onClick={() => dayAfter()} className='arrow-right'></div>
        </div>
      </div>

      <Sheet timesheetArray={timesheetEvents} button={signInOutButton} date={date}
      />
    </>
  )
}
