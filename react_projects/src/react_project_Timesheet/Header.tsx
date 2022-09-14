import { useState } from 'react'
import { Sheet } from './Sheet'

export const Header = () => {

  const [signInOutButton, setSignInOutButton] = useState(false)
  const[userEnteredTask, setUserEnteredTask] = useState("")

  const toggleButton = () => {
    setSignInOutButton(prev => !prev)
  }

  const addTaskInSheet = () => {
  console.log(userEnteredTask)
  }
  return (
    <>
      <div className='header-container'>
        <button onClick={() => toggleButton()} className="sign-in-out">{signInOutButton ? "SIGN OUT" : "SIGN IN"}</button>
        {signInOutButton && <input onChange = {(e) => setUserEnteredTask(e.target.value)} className="input-task" placeholder="Enter your task here"></input>}
        {signInOutButton && <button onClick = {() => addTaskInSheet()} className="add-task-button">ADD TASK</button>}
      </div>

      <Sheet/>
    </>
  )
}
