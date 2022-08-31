import { useEffect, useState } from "react"

const sleep = async (timeToSleep) => new Promise(resolve => setTimeout(resolve, timeToSleep))

export const Input = () => {

  const [order, setOrder] = useState([0, 1, 2, 3, 4])
  const [boxToColor, setBoxToColor] = useState(-1)

  const randomBlink = async () => {

    let shuffledArray = [...order].sort((a,b) => {
      return 0.5 - Math.random();
    })
    
    setOrder(shuffledArray)

    for (let i = 0; i < order.length; i++) {
      setBoxToColor(order[i])
      await sleep(1000)
    }

    setBoxToColor(-1)
  }

  return (
    <>
      <div className="title">
        Simon Says 😀
      </div>

      <div className="box-container">
        {Array(5).fill(0).map((value, i) => {
          return <div className={`box ${boxToColor === i ? "green" : "grey"}`} key={i}>

          </div>
        })}
      </div>

      <div className="play-container">
        <button className="play" onClick={() => randomBlink()}>PLAY</button>
      </div>

      <div className="message">WATCh</div>
    </>
  )
}