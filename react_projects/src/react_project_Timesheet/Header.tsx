import { addDays, format, formatISO, isTomorrow, subDays } from 'date-fns'
import { useEffect, useState } from 'react'
import { Sheet } from './Sheet'

export const Header = () => {
  const [userIsSignedIn, setUserIsSignedIn] = useState(false)
  const [userEnteredTask, setUserEnteredTask] = useState('')
  const [timesheetEvents, setTimesheetEvents] = useState(
    () => {
      const saved = localStorage.getItem('eventEntered')
      return JSON.parse(saved) || {}
    }
  )

  const [date, setDate] = useState(new Date())
  const dateKey = formatISO(date, { representation: 'date' })

  const userEventType = userIsSignedIn ? 'SIGN OUT' : 'SIGN IN'

  const addEvent = (event) => {
    setTimesheetEvents((prev) => {
      return {
        ...prev,
        [dateKey]: (prev[dateKey] || []).concat(event)
      }
    })
  }

  const toggleButton = () => {
    if (userEnteredTask !== '' || !userIsSignedIn) {
      setUserEnteredTask('')
      setUserIsSignedIn(prev => !prev)
      addEvent({
        date: new Date(),
        description: userIsSignedIn ? userEnteredTask : '',
        eventType: userEventType
      })
    }
  }

  const addTaskInSheet = () => {
    if (userEnteredTask !== '') {
      setUserEnteredTask('')
      addEvent(
        {
          date: new Date(),
          description: userIsSignedIn ? userEnteredTask : '',
          eventType: ''
        }
      )
    }
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
      <div className='flex px-[30px] pl-[10px] m-[10px] justify-between items-center bg-[#2f3a40] h-[70px]'>
        <button onClick={() => toggleButton()} className='text-[28px]  text-white bg-[#febe07] px-[10px]'>{userEventType}</button>
        {!userIsSignedIn && <div className='text-[50px] text-[#febe07]'>TIMESHEET</div>}
        {userIsSignedIn && <input value={userEnteredTask} onChange={(e) => setUserEnteredTask(e.target.value)} className="w-[40%] text-[22px] p-[10px] outline-none" placeholder="Enter your task here"></input>}
        {userIsSignedIn && <button onClick={() => addTaskInSheet()} className="text-[30px] bg-[#febe07] text-white px-[10px]">ADD TASK</button>}
        <div className='flex items-center justify-between w-[30%]'>
          <div onClick={() => dayBefore()} className='border-y-[18px]  border-r-[18px] border-r-[#febe07] border-y-transparent'></div>
          <div className="text-[30px] bg-[#febe07] text-white px-[10px] py-[2px] flex items-center">Date: {format(date, 'do MMMM yyyy')}</div>
          <div onClick={() => dayAfter()} className='border-y-[18px]  border-l-[18px] border-l-[#febe07] border-y-transparent'></div>
        </div>
      </div>

      <Sheet timesheetArray={timesheetEvents} button={userIsSignedIn} date={date}
      />
    </>
  )
}
