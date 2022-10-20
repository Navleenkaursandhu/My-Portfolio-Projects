import { addDays, format, formatISO, isTomorrow, subDays } from 'date-fns'
import { useEffect, useState } from 'react'
import { Sheet } from './Sheet'
import background from './assets/image.png'
import { buttonShadowEffect } from '../common/tailwind_constants'

export const Header = () => {
  const [userIsSignedIn, setUserIsSignedIn] = useState(false)
  const [userEnteredTask, setUserEnteredTask] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
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

    if (userEnteredTask === '' && userIsSignedIn) {
      setErrorMsg('To sign out, please add description!')
    }

    if (userIsSignedIn && userEnteredTask !== '') {
      setErrorMsg('')
    }
  }

  const dismissError = () => {
    setErrorMsg('')
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
      <div className='flex sm:flex-row flex-col sm:justify-around items-center bg-[#2f3a40] py-6 w-full sm:gap-0 gap-4'>
        <button onClick={() => toggleButton()} className={`${buttonShadowEffect} shadow-amber-400 hover:shadow-amber-400 rounded-md lg:p-2 px-1 py-0.5 md:text-2xl text-md text-white bg-amber-300`}>{userEventType}</button>
        {!userIsSignedIn && <div className='lg:text-4xl text-2xl text-[#febe07]'>TIMESHEET</div>}
        {userIsSignedIn && <input value={userEnteredTask} onChange={(e) => setUserEnteredTask(e.target.value)} className="sm:w-[40%] w-auto md:text-2xl text-md rounded-md lg:p-3.5 p-1.5 outline-none" placeholder="Enter your task here"></input>}
        {userIsSignedIn && <button onClick={() => addTaskInSheet()} className={`${buttonShadowEffect} shadow-amber-400 hover:shadow-amber-400 rounded-md lg:p-2 md:text-2xl bg-amber-300 text-md text-white px-[10px]`}>ADD TASK</button>}
        <div className='flex items-center justify-between gap-4 sm:mt-0 mt-10'>
          <div onClick={() => dayBefore()} className='hover:cursor-pointer hover:grayscale lg:border-y-[16px] lg:border-r-[16px] border-y-[10px] border-r-[10px] border-r-amber-300 border-y-transparent'></div>
          <div className="md:text-2xl text-md bg-amber-300 rounded-md text-white sm:px-[10px] sm:py-[2px] lg:px-12 lg:py-2 px-1 py-0.5 flex items-center">{format(date, 'd/L/yyyy')}</div>
          <div onClick={() => dayAfter()} className='hover:cursor-pointer hover:grayscale lg:border-y-[16px] lg:border-l-[16px] border-y-[10px] border-l-[10px] border-l-amber-300 border-y-transparent'></div>
        </div>
      </div>

      {errorMsg && <div className='flex px-10 py-2 bg-red-400 justify-between items-center text-white xl:text-3xl lg:text-2xl md:text-xl text-md'>
        <div className='flex items-center gap-2'>
          <span className="material-symbols-rounded xl:text-4xl lg:text-3xl md:text-2xl text-xl">
            error
          </span>{errorMsg}
        </div>
        <div onClick={() => dismissError()}>X</div>
      </div>}

      <div className='flex gap-4 md:p-4'>
        <img className='w-[16%] md:block hidden self-start' src={background} />
        <Sheet timesheetArray={timesheetEvents} button={userIsSignedIn} date={date} />
      </div>
    </>
  )
}
