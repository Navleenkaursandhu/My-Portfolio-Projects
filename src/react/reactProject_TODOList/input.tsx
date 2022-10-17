import React from 'react'
import { buttonShadowEffect } from '../common/tailwind_constants'

export const Input = () => {
  const [textInput, setTextInput] = React.useState('')
  const [list, setList] = React.useState([])

  const displayTask = () => {
    setList(list.concat(textInput))
    setTextInput('')
  }
  const doneTask = (id: Number) => {
    setList(list.filter((e, i) => {
      return i !== Number(id)
    }))
  }

  return (
    <>
      <div className='text-center p-[10px] md:text-2xl lg:text-3xl text-lg font-bold text-slate-500'>TODO LIST</div>
      <div className='flex lg:flex-row flex-col gap-8 justify-center items-center lg:text-2xl md:text-xl text-md'>
        <input
          className="p-[14px] rounded-[10px] bg-slate-100 w-2/3"
          placeholder='Add your task here'
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)} />

        <button
          className={`p-2 w-auto text-center rounded-lg bg-slate-200 shadow-slate-500 text-slate-500 font-bold hover:shadow-slate-500 ${buttonShadowEffect}`}
          onClick={() => displayTask()}>Add Task</button>
      </div>

      <div className='flex flex-col justify-center items-center gap-[20px] mt-[50px] rounded-[10px] lg:text-2xl md:text-xl text-md'>
        {list.map((task, i) => <div className="flex lg:w-4/5 w-2/3 items-center justify-between bg-slate-100 rounded-[10px] p-[10px]" key={i} id={i.toString()}>📝{task}
          <button onClick={() => doneTask(i)}>
            <span className="material-symbols-rounded lg:text-4xl md:text-3xl text-2xl hover:cursor-pointer hover:bg-slate-300 hover:rounded-md">delete_forever</span>
          </button>
        </div>)}
      </div>
    </>
  )
}
