import { addDays, format, isTomorrow, subDays } from 'date-fns'
import { useEffect, useState } from 'react'
import { Sheet } from './Sheet'

export const Header = () => {
  const [signInOutButton, setSignInOutButton] = useState(false)
  const [userEventType, setEventType] = useState('SIGN IN')
  const [userEnteredTask, setUserEnteredTask] = useState('')
  const [timesheetEvents, setTimesheetEvents] = useState([])
  const [date, setDate] = useState(new Date())

  const toggleButton = () => {
    setSignInOutButton(prev => !prev)
    setTimesheetEvents((prev) => {
      return prev.concat(
        {
          date: new Date(),
          description: signInOutButton ? userEnteredTask : '',
          eventType: userEventType
        }
      )
    })
  }

  useEffect(() => {
    setEventType(() => signInOutButton ? 'SIGN OUT' : 'SIGN IN')
  }, [signInOutButton])

  const addTaskInSheet = () => {
    console.log(userEnteredTask)
    setTimesheetEvents((prev) => {
      return prev.concat(
        {
          date: new Date(),
          description: userEnteredTask,
          eventType: ''
        }
      )
    })
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

      <Sheet timesheetArray={timesheetEvents} button ={signInOutButton}
      />
    </>
  )
}
