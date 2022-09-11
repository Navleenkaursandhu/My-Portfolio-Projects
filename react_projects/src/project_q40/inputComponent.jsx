import React from 'react'

export const InputComponent = (props) => {

  const [input, setInput] = React.useState("")

  return(
    <>
    <input placeholder="Your first name" onChange={e => setInput(e.target.value)}></input>
    <button onClick={() => props.handleChange(input)} >Say Hello</button>
    </>
  )

  /*
  return [
    React.inputElement({
      placeholder: 'your first name',
      onChange: () => {},
    }),
    React.buttonElement({
      onClick: () => props.handleChange(input),
      children: [
        'Say Hello',
      ]
    })
  ]*/
}