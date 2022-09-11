import React from 'react'

export const Input = () => {
  const [textInput, setTextInput] = React.useState("")
  const [list, setList] = React.useState([])

  const displayTask = () => {
    setList(list.concat(textInput))
    setTextInput("")
  }
  const doneTask = (id: Number) => {
    setList(list.filter((e, i) => {
      return i !== Number(id)
    }))
  }

  return (
    <>
      <div className='title'>TODO LIST</div>
      <div className='add-text-input'>
        <input
          className="input-task-bar"
          placeholder='Add your task here'
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)} />

        <button
          className='add-task-button'
          onClick={() => displayTask()}>Add Task</button>
      </div>

      <div className='added-tasks'>
        {list.map((task, i) => <div className="task" key={i} id={i.toString()}>📝{task}
          <button onClick={() => doneTask(i)} className='done-btn'>
            <span className="material-icons">delete_forever</span>
          </button>
        </div>)}
      </div>
    </>
  )
}