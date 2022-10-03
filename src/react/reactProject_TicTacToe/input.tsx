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
    setCellValues(
      [['', '', ''],
        ['', '', ''],
        ['', '', '']
      ])

    setPlayer('x')

    setResult('')
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="w-[50%] text-black text-[54px] mt-[30px] text-center">Tic Tac Toe</div>
      </div>

      <div className="flex justify-center text-[40px] p-[20px]">Current Player:&nbsp;
        <div>{player}</div>
      </div>

      <div className="flex justify-center">
        <table className='border-collapse'>
          <tbody>
            <tr>
              <td className='w-[130px] h-[130px] text-[80px] text-center border-2 border-black' onClick={() => displayPlayer(0, 0)}>{cellValues[0][0]}</td>
              <td className='w-[130px] h-[130px] text-[80px] text-center border-2 border-black' onClick={() => displayPlayer(0, 1)}>{cellValues[0][1]}</td>
              <td className='w-[130px] h-[130px] text-[80px] text-center border-2 border-black' onClick={() => displayPlayer(0, 2)}>{cellValues[0][2]}</td>
            </tr>

            <tr>
              <td className='w-[130px] h-[130px] text-[80px] text-center border-2 border-black' onClick={() => displayPlayer(1, 0)}>{cellValues[1][0]}</td>
              <td className='w-[130px] h-[130px] text-[80px] text-center border-2 border-black' onClick={() => displayPlayer(1, 1)}>{cellValues[1][1]}</td>
              <td className='w-[130px] h-[130px] text-[80px] text-center border-2 border-black' onClick={() => displayPlayer(1, 2)}>{cellValues[1][2]}</td>
            </tr>

            <tr>
              <td className='w-[130px] h-[130px] text-[80px] text-center border-2 border-black' onClick={() => displayPlayer(2, 0)}>{cellValues[2][0]}</td>
              <td className='w-[130px] h-[130px] text-[80px] text-center border-2 border-black' onClick={() => displayPlayer(2, 1)}>{cellValues[2][1]}</td>
              <td className='w-[130px] h-[130px] text-[80px] text-center border-2 border-black' onClick={() => displayPlayer(2, 2)}>{cellValues[2][2]}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-center text-[38px] p-[4px]">{result}</div>

      <div className="flex justify-center">
        <button className="text-[28px] p-[4px] rounded-[10px] m-[4px] bg-black text-white px-[10px] hover:shadow-[5px_5px_10px_10px_#d1cdcd]" onClick={() => resetGame()}>RESTART</button>
      </div>
    </>
  )
}
