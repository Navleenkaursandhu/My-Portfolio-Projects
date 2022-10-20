import { addDays, format, formatISO, isTomorrow, subDays } from 'date-fns'
import { useEffect, useState } from 'react'
import { Sheet } from './Sheet'
import background from './assets/image.png'

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
      <div className='flex sm:flex-row flex-col sm:justify-around items-center bg-[#2f3a40] py-6 w-full sm:gap-0 gap-3.5'>
        <button onClick={() => toggleButton()} className='shadow hover:shadow-lg hover:shadow-gray-400 lg:p-2 px-1 py-0.5 md:text-2xl text-md text-white bg-[#febe07]'>{userEventType}</button>
        {!userIsSignedIn && <div className='lg:text-4xl text-2xl text-[#febe07]'>TIMESHEET</div>}
        {userIsSignedIn && <input value={userEnteredTask} onChange={(e) => setUserEnteredTask(e.target.value)} className="sm:w-[40%] w-[90%] md:text-2xl text-md  lg:p-3.5 p-1.5 outline-none" placeholder="Enter your task here"></input>}
        {userIsSignedIn && <button onClick={() => addTaskInSheet()} className="shadow hover:shadow-lg hover:shadow-gray-400 lg:p-2 md:text-2xl text-md bg-[#febe07] text-white px-[10px]">ADD TASK</button>}
        <div className='flex items-center justify-between gap-4'>
          <div onClick={() => dayBefore()} className='hover:cursor-pointer hover:grayscale lg:border-y-[16px] lg:border-r-[16px] border-y-[10px] border-r-[10px] border-r-[#febe07] border-y-transparent'></div>
          <div className="md:text-2xl text-md bg-[#febe07] text-white sm:px-[10px] sm:py-[2px] lg:p-2 px-1 py-0.5 flex items-center">{format(date, 'd/L/yyyy')}</div>
          <div onClick={() => dayAfter()} className='hover:cursor-pointer hover:grayscale lg:border-y-[16px] lg:border-l-[16px] border-y-[10px] border-l-[10px] border-l-[#febe07] border-y-transparent'></div>
        </div>
      </div>

      <div className='flex gap-4 md:p-4'>
        <img className='w-[16%] md:block hidden self-start' src={background} />
        <Sheet timesheetArray={timesheetEvents} button={userIsSignedIn} date={date} />
      </div>
    </>
  )
}
