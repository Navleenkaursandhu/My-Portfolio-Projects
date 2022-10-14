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
      <div className='text-center p-[10px] text-3xl font-bold text-slate-500'>TODO LIST</div>
      <div className='flex gap-8 justify-center'>
        <input
          className="p-[14px] text-2xl rounded-[10px] bg-slate-100 w-3/4"
          placeholder='Add your task here'
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)} />

        <button
          className={`px-6 rounded-lg bg-slate-200 shadow-slate-500 text-slate-500 font-bold hover:shadow-slate-500 text-2xl ${buttonShadowEffect}`}
          onClick={() => displayTask()}>Add Task</button>
      </div>

      <div className='flex flex-col gap-[20px] mt-[20px] rounded-[10px]'>
        {list.map((task, i) => <div className="flex items-center justify-between bg-slate-100 rounded-[10px] p-[10px] text-[25px]" key={i} id={i.toString()}>📝{task}
          <button onClick={() => doneTask(i)}>
            <span className="material-symbols-rounded text-[36px] hover:cursor-pointer hover:bg-slate-300 hover:rounded-md">delete_forever</span>
          </button>
        </div>)}
      </div>
    </>
  )
}
