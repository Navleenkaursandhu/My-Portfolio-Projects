import { useEffect, useState } from 'react'
import './style.css'
export const Main = () => {

  const [symbols, setSymbols] = useState({})
  const [selectedFromOption, setSelectedFromOption] = useState("")
  const [selectedToOption, setSelectedToOption] = useState("")
  const [conversionData, setConversionData] = useState({})

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

  console.log(conversionData["query"].amount)
  console.log(conversionData["query"].from)
  console.log(conversionData["result"])
  console.log(conversionData["query"].to)

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

  console.log(selectedToOption)
  console.log(selectedFromOption)

  return (
    <div className="currency-container">
      <div className="convertor">
        <div className='heading'>CURRENCY CONVERTER</div>

        <div className='amount-container'>
          <div>Amount</div>
          <input className="input" placeholder='Enter amount to be converted here'></input>
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
          <div className='unit-before'>{conversionData["query"].amount} {conversionData["query"].from}</div>
          <div>=</div>
          <div className='unit-amount-after'>{conversionData["result"]} {conversionData["query"].to}</div>
        </div>

        <div className='convert-button-container'>
          <div className='convert-button'>CONVERT</div>
        </div>

        <div className='display-amount-container'>
          <div className='from-amount'>277RUPEES</div>
          <div className='equals'>=</div>
          <div className='to-amount'>120 DOLLARS</div>
        </div>

      </div>
    </div>
  )
} 