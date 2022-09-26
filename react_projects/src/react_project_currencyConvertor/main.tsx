import { useEffect, useState } from 'react'
export const Main = () => {
  const [symbols, setSymbols] = useState<any>({})
  const [selectedFromOption, setSelectedFromOption] = useState('')
  const [selectedToOption, setSelectedToOption] = useState('')
  const [conversionData, setConversionData] = useState<any>({})
  const [userInputVal, setUserInputVal] = useState('1')

  const fetchData = async () => {
    const response = await fetch('https://api.exchangerate.host/symbols')
    const data = await response.json()
    setSymbols(data.symbols)
  }

  const fetchConversionData = async () => {
    const response = await fetch(`https://api.exchangerate.host/convert?from=${selectedToOption}&to=${selectedFromOption}`)
    const conversionResponse = await response.json()
    setConversionData(conversionResponse)
  }

  const keyArray = Object.keys(symbols)

  useEffect(() => {
    void fetchData()
  }, [])

  useEffect(() => {
    void fetchConversionData()
  }, [selectedFromOption, selectedToOption])

  const displayDescriptionFrom = (e) => {
    setSelectedToOption(e.target.value)
  }

  const displayDescriptionTo = (e) => {
    setSelectedFromOption(e.target.value)
  }

  return (
    <div className="relative mt-[64px] mr-[auto] mb-[0px] ml-[auto] w-[560px] font-applyPTSans">
      <div className='h-[100px] w-[100px] rounded-[50px] top-[-10%] left-[70%] text-[64px] bg-[#86f6d1] flex justify-center items-center absolute shadow-[2px_2px_3px_3px_#999899] '>¥</div>
      <div className='h-[130px] w-[130px] rounded-[70px] top-[50%] left-[-18%] text-[80px] bg-[#fc6da9] flex justify-center items-center absolute shadow-[2px_2px_3px_3px_#999899]'>€</div>
      <div className='h-[96px] w-[96px] rounded-[50px] top-[70%] left-[95%] text-[54px] bg-[#f78cd1] flex justify-center items-center absolute shadow-[2px_2px_3px_3px_#999899]'>$</div>
      <div className='h-[74px] w-[74px] rounded-[50px] top-[10%] left-[-5%] text-[40px] bg-[#83f2f4] flex justify-center items-center absolute shadow-[2px_2px_3px_3px_#999899]'>₣</div>
      <div className='h-[84px] w-[84px] rounded-[50px] top-[90%] left-[34%] text-[50px] bg-[#7ba4ef] flex justify-center items-center absolute shadow-[2px_2px_3px_3px_#999899]'>£</div>

      <div className="flex flex-col h-[600px] rounded-[14px] px-[0px] py-[60px] bg-slate-100 shadow-[2px_2px_2px_2px_#c1c2c4]">
        <div className='text-[34px] text-center mt-[0px] mx-[0px] mb-[30px]'>CURRENCY CONVERTER</div>

        <div className='flex flex-col gap-[10px] mt-[30px] mb-[10px] mx-[50px] text-[24px]'>
          <div>Amount</div>
          <input onChange={(e) => setUserInputVal(e.target.value)} className="text-[20px] p-[10px] rounded-[4px]  shadow-[2px_2px_3px_3px_#c5c5c7]" placeholder='Enter amount to be converted here'></input>
        </div>

        <div className='flex justify-between mt-[30px] mr-[50px] mb-[0px] ml-[50px] text-[24px]'>
          <div>From</div>
          <div>To</div>
        </div>

        <div className='flex items-center px-[0px] py-[10px] justify-between my-[0px] mx-[50px] text-[24px]'>
          <select onChange={(e) => displayDescriptionFrom(e)} className='w-[44%] shadow-[2px_2px_3px_3px_#c5c5c7] p-[4px] text-[20px] rounded-[4px]'>
            <option>Select</option>
            {keyArray.map((key, i) => {
              return <option key={i} value={symbols[key].code} className='flex flex-col gap-[5px]'>{symbols[key].code}
              </option>
            })}
          </select>

          <span className="text-[35px] material-symbols-rounded">
            swap_horiz
          </span>

          <select onChange={(e) => displayDescriptionTo(e)} className='w-[44%] shadow-[2px_2px_3px_3px_#c5c5c7] p-[4px] text-[20px] rounded-[4px]'>
            <option >Select</option>
            {keyArray.map((key, i) => {
              return <option value={symbols[key].code} key={i} className='flex flex-col gap-[5px]'>{symbols[key].code}</option>
            })}
          </select>
        </div>

        <div className='flex justify-between mt-[5px] mr-[50px] mb-[0px] ml-[50px] text-[20px] h-[44px]'>
          <div className='w-[44%]'>
            {selectedToOption && <div>{symbols[selectedToOption].description}</div>}
          </div>

          <div className='w-[44%]'>
            {selectedFromOption && <div>{symbols[selectedFromOption].description}</div>}
          </div>
        </div>

        <div className='flex justify-center items-center mt-[60px] mx-[80px] mb-[8px] gap-[20px] text-[30px] rounded-[5px] '>
          {selectedFromOption && selectedToOption && <div className='unit-before'>{conversionData.query.amount * Number(userInputVal)} {conversionData.query.from}</div>}
          {selectedFromOption && <div>=</div>}
          {selectedToOption && selectedFromOption && <div className='unit-amount-after'>{(conversionData.result * Number(userInputVal)).toFixed(2)} {conversionData.query.to}</div>}
        </div>
      </div>
    </div>
  )
}
