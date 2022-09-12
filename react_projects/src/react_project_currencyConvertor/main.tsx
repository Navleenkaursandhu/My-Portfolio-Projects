import React, { useEffect, useState } from 'react'
import './style.css'
export const Main = () => {

  const [symbols, setSymbols] = useState({})
  const [selectedFromOption, setSelectedFromOption] = useState("")
  const [selectedToOption, setSelectedToOption] = useState("")
  const [conversionData, setConversionData] = useState({})
  const [userInputVal, setUserInputVal] = useState('1')


  const fetchData = async () => {
    const response = await fetch("https://api.exchangerate.host/symbols")
    const data = await response.json()
    setSymbols(data.symbols)
  }

  const fetchConversionData = async () => {
    const response = await fetch(`https://api.exchangerate.host/convert?from=${selectedToOption}&to=${selectedFromOption}`)
    const conversionResponse = await response.json()
    setConversionData(conversionResponse)
  }

  console.log(conversionData)

  console.log(symbols)
  console.log(Object.keys(symbols))

  const keyArray = Object.keys(symbols)

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    fetchConversionData()
  }, [selectedFromOption, selectedToOption])

  const displayDescriptionFrom = (e) => {
    setSelectedToOption(e.target.value)
  }

  const displayDescriptionTo = (e) => {
    setSelectedFromOption(e.target.value)
  }

  const userInput = (e) => {
    setUserInputVal(e.target.value)
  }



  console.log(selectedToOption)
  console.log(selectedFromOption)

  return (
    <div className="currency-container">

      <div className='circle1'>¥</div>
      <div className='circle2'>€</div>
      <div className='circle3'>$</div>
      <div className='circle4'>₣</div>
      <div className='circle5'>£</div>
      
        <div className="convertor">
          <div className='heading'>CURRENCY CONVERTER</div>

          <div className='amount-container'>
            <div>Amount</div>
            <input onChange={(e) => userInput(e)} className="input" placeholder='Enter amount to be converted here'></input>
          </div>

          <div className='from-to-container'>
            <div>From</div>
            <div>To</div>
          </div>

          <div className='select-currency-container'>
            <select onChange={(e) => displayDescriptionFrom(e)} className='from'>
              <option>Select</option>
              {keyArray.map((key, i) => {
                return <option key={i} value={symbols[key].code} className='option'>{symbols[key].code}
                </option>
              })}


            </select>

            <span className="from-to material-symbols-rounded">
              swap_horiz
            </span>

            <select onChange={(e) => displayDescriptionTo(e)} className='to'>
              <option >Select</option>
              {keyArray.map((key, i) => {
                return <option value={symbols[key].code} key={i} className='option'>{symbols[key].code}</option>
              })}
            </select>
          </div>

          <div className='currency-description'>
            <div className='from-description'>
              {selectedToOption && <div>{symbols[selectedToOption].description}</div>}
            </div>

            <div className='to-description'>
              {selectedFromOption && <div>{symbols[selectedFromOption].description}</div>}
            </div>
          </div>


          <div className='unit-value-container'>
            {selectedFromOption && selectedToOption && <div className='unit-before'>{conversionData["query"].amount * Number(userInputVal)} {conversionData["query"].from}</div>}
            {selectedFromOption && <div>=</div>}
            {selectedToOption && selectedFromOption && <div className='unit-amount-after'>{conversionData["result"] * Number(userInputVal)} {conversionData["query"].to}</div>}
          </div>
        </div>
    </div>
  )
} 