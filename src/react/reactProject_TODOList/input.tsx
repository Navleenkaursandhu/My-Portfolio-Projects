import React from 'react'

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
      <div className='text-center p-[10px] text-[24px] font-bold'>TODO LIST</div>
      <div className='flex justify-between'>
        <input
          className="w-[350px] p-[10px] text-[24px] rounded-[10px]"
          placeholder='Add your task here'
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)} />

        <button
          className='hover:cursor-cell text-[24px] rounded-[10px] bg-[#ddd9d9] text-black px-[4px]'
          onClick={() => displayTask()}>Add Task</button>
      </div>

      <div className='flex flex-col gap-[20px] mt-[20px] rounded-[10px]'>
        {list.map((task, i) => <div className="flex items-center justify-between bg-[#ddd9d9] rounded-[10px] p-[10px] text-[25px]" key={i} id={i.toString()}>📝{task}
          <button onClick={() => doneTask(i)}>
            <span className="material-symbols-rounded text-[36px] hover:cursor-pointer hover:bg-[#b1adad]">delete_forever</span>
          </button>
        </div>)}
      </div>
    </>
  )
}
