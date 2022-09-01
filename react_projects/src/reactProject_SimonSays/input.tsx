import { useState } from "react"

const sleep = async (timeToSleep) => new Promise(resolve => setTimeout(resolve, timeToSleep))

export const Input = () => {

  const [order, setOrder] = useState([0, 1, 2, 3, 4])
  const [boxToColor, setBoxToColor] = useState(-1)
  const [message, setMessage] = useState("")
  const [userInput, setUserInput] = useState([])
  const [gameState, setGameState] = useState("idle") //idle, blinking, gettingUserInput, win, lose

  const startGame = async () => {
    console.log('Game state:', gameState)
    if (gameState !== "blinking") {
      setGameState("blinking")
      setUserInput([])
      setMessage("WATCH")

      let shuffledArray = [...order].sort((a, b) => {
        return 0.5 - Math.random();
      })

      setOrder(shuffledArray)
      console.log(shuffledArray)

      for (let i = 0; i < shuffledArray.length; i++) {
        setBoxToColor(shuffledArray[i])
        await sleep(1000)
      }

      setBoxToColor(-1)
      setMessage("It's Your Turn!")
      setGameState("gettingUserInput")
    }
  }

  const inputUser = (i) => {

    if (gameState === "gettingUserInput" && !userInput.includes(i)) {
      const newUserInput = userInput.concat(i);
      setUserInput(newUserInput)

      for (let index = 0; index < newUserInput.length; index++) {

        if (newUserInput[index] !== order[index]) {
          setGameState("lose")
          setMessage("You Lost!")
        }
        else if (newUserInput.length === 5) {
          setGameState("win")
          setMessage("You Won!")
        }
      }
    }
  }

  return (
    <>
      <div className="title">
        Simon Says 😀
      </div>

      <div className="box-container">
        {Array(5).fill(0).map((value, i) => {
          if (gameState === "lose" && i === userInput[userInput.length - 1]) {
            return <div onClick={() => inputUser(i)} className="box not-ok" key={i}></div>
          }

          if (boxToColor === i) {
            return <div onClick={() => inputUser(i)} className="box show-blue" key={i}></div>
          }

          if(userInput.includes(i)){
            return <div onClick={() => inputUser(i)} className="box show-green" key={i}></div>
          }
          
          return <div onClick={() => inputUser(i)} className="box no-color" key={i}></div>
        })}
      </div>

      <div className="play-container">
        <button className="play" onClick={() => startGame()}>PLAY</button>
      </div>

      <div className="message">{message}</div>
    </>
  )
}