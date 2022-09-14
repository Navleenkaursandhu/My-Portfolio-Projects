import { format } from 'date-fns'
import { useEffect, useState } from 'react'
import { Sheet } from './Sheet'

export const Header = () => {
  const [signInOutButton, setSignInOutButton] = useState(false)
  const [userEventType, setEventType] = useState('SIGN IN')
  
  const [userEnteredTask, setUserEnteredTask] = useState('')
  const [timesheetEvents, setTimesheetEvents] = useState([])

  const toggleButton = () => {
    setSignInOutButton(prev => !prev)
    setTimesheetEvents((prev) => {
      return prev.concat(
        {
          date: new Date(),
          description: '',
          eventType: userEventType
        }
      )
    })
  }

  useEffect(() => {
    setEventType(prev => signInOutButton ? prev = 'SIGN OUT' : prev = 'SIGN IN')
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
  return (
    <>
      <div className='header-container'>
        <button onClick={() => toggleButton()} className='sign-in-out'>{userEventType}</button>
        {!signInOutButton && <div className='heading'>TIME SHEET</div>}
        {signInOutButton && <input onChange={(e) => setUserEnteredTask(e.target.value)} className="input-task" placeholder="Enter your task here"></input>}
        {signInOutButton && <button onClick={() => addTaskInSheet()} className="add-task-button">ADD TASK</button>}
        {signInOutButton && <div className="current-date">Date: {format(new Date(), 'do MMMM yyyy')}</div>}
      </div>

      <Sheet timesheetArray={timesheetEvents}
      />
    </>
  )
}
