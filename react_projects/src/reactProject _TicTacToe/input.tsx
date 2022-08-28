
export const Input = () => {



  const displayPlayer = () => {
    console.log("x")
  }



  return (
    <>
      <div className="center">
        <div className="title center">Tic Tac Toe</div>
      </div>

      <div className="center player">Current Player:
        <div>X</div>
      </div>

      <div className="container">
        <table>
          <tbody>
          <tr>
            <td onClick={() => displayPlayer()}></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          </tbody>
        </table>

      </div>

      <div className="center result">Result:</div>

      <div className="center">
        <button className="restart">RESTART</button>
      </div>
    </>
  )
}