export const Input = () => {
  return(
    <>
    <div className="center">
    <svg className="clock" viewBox="0 0 100 100">
      <circle className="circle" cx="50" cy="50" r="40"></circle>
      <circle className="inner-circle" cx="50" cy="50" r="3.5"></circle>
      <line id="second-line" x1="50" y1="50" x2="50" y2="10"></line>
      <line id="minute-line" x1="50" y1="50" x2="50" y2="15"></line>
      <line id="hour-line" x1="50" y1="50" x2="50" y2="25"></line>
    </svg>
  </div>

  <div className="center" id="current-time"></div>
    </>
  )
}