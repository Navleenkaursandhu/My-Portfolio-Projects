export const Input = () => {


  return (
    <>
      <div className="title">
        Simon Says 😀
      </div>

      <div className="box-container">
        {Array(5).fill(0).map(() => {
          return <div className="box"></div>
        })}
      </div>

      <div className="play-container">
        <button className="play">PLAY</button>
      </div>

      <div className="message">WATCh</div>
    </>
  )
}