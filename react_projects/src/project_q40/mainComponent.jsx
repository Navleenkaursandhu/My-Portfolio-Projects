import React from 'react'
import { InputComponent } from "./inputComponent"
export const MainComponent = () => {

  const [input, setInput] = React.useState("")

  const handleChange = (input) => {
    setInput(input)
  }

  return (
    <>
    <InputComponent handleChange={handleChange}/>
    <div>
      {`oh, hello there ${input}`}
    </div>
    </>
  )
}