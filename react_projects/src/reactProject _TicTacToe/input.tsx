import React from 'react'
export const Input = () => {
  const [player, setPlayer] = React.useState('x')
  const [cellValues, setCellValues] = React.useState(
    [['', '', ''],
      ['', '', ''],
      ['', '', '']
    ])

  const [result, setResult] = React.useState('')

  const displayPlayer = (row, column) => {
    setPlayer(prevPlayer => {
      if (prevPlayer === 'x') {
        return 'o'
      } else {
        return 'x'
      }
    })

    const newCellVals = [
      [...cellValues[0]],
      [...cellValues[1]],
      [...cellValues[2]]
    ]
    if (newCellVals[row][column] === '') {
      newCellVals[row][column] = player
    }
    setCellValues(newCellVals)

    if (newCellVals[row][0] === newCellVals[row][1] && newCellVals[row][1] === newCellVals[row][2]) {
      setResult(`${player} Wins!`)
    } else if (newCellVals[0][column] === newCellVals[1][column] && newCellVals[1][column] === newCellVals[2][column]) {
      setResult(`${player} Wins!`)
    } else if (newCellVals[1][1] === player && newCellVals[0][0] === newCellVals[1][1] && newCellVals[1][1] === newCellVals[2][2]) {
      setResult(`${player} Wins!`)
    } else if (newCellVals[1][1] === player && newCellVals[0][2] === newCellVals[1][1] && newCellVals[1][1] === newCellVals[2][0]) {
      setResult(`${player} Wins!`)
    } else if (newCellVals.map(rowArray => rowArray.every(e => e !== '')).every(e => e)) {
      setResult("It's a Draw!")
    }
  }

  const resetGame = () => {
    setCellValues([['', '', ''],
      ['', '', ''],
      ['', '', '']
    ])

    setPlayer('x')

    setResult('')
  }

  return (
    <>
      <div className="center">
        <div className="title center">Tic Tac Toe</div>
      </div>

      <div className="center player">Current Player:
        <div>{player}</div>
      </div>

      <div className="container">
        <table>
          <tbody>
            <tr>
              <td onClick={() => displayPlayer(0, 0)}>{cellValues[0][0]}</td>
              <td onClick={() => displayPlayer(0, 1)}>{cellValues[0][1]}</td>
              <td onClick={() => displayPlayer(0, 2)}>{cellValues[0][2]}</td>
            </tr>

            <tr>
              <td onClick={() => displayPlayer(1, 0)}>{cellValues[1][0]}</td>
              <td onClick={() => displayPlayer(1, 1)}>{cellValues[1][1]}</td>
              <td onClick={() => displayPlayer(1, 2)}>{cellValues[1][2]}</td>
            </tr>

            <tr>
              <td onClick={() => displayPlayer(2, 0)}>{cellValues[2][0]}</td>
              <td onClick={() => displayPlayer(2, 1)}>{cellValues[2][1]}</td>
              <td onClick={() => displayPlayer(2, 2)}>{cellValues[2][2]}</td>
            </tr>
          </tbody>
        </table>

      </div>

      <div className="center result">{result}</div>

      <div className="center">
        <button className="restart" onClick={() => resetGame()}>RESTART</button>
      </div>
    </>
  )
}
