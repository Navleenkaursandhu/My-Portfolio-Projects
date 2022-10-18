import { useEffect, useState } from 'react'

export const title = 'CURRENCY CONVERTER'
export const description = <div>
  Get a fast and easy calculator for converting 100+ currencies using the latest live exchange rates by just selecting correct pair of
  ISO currency codes. Exchange rates keep on fluctuating, and this live Currency Converter fetches the latest exchange rate from an external <span className='bg-purple-100 px-2'>API</span> making
  it the ideal tool to keep your eye on the market rate for any given currency. You don&apos;t even need an account to use this App, just select the
  currency pair you want to see and the built-in market Exchange Rate Calculator will provide you the latest market values.
</div>
export const skills = ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'HTML', 'REST API', 'ESLint', 'Git', 'Github', 'VS Code']
export const date = 'September 2022'
export const link = './CurrencyConvertor'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/react/react_project_currencyConvertor'

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
    <div className="relative mt-[64px] mr-[auto] mb-[0px] ml-[auto] lg:w-1/2 md:w-3/5 w-4/5 font-applyAmiko">
      <div className='lg:h-[100px] lg:w-[100px] md:h-[94px] md:w-[94px] sm:h-[92px] sm:w-[92px] h-[60px] w-[60px] rounded-[50px] top-[-8%] left-[70%] lg:text-[64px] md:text-[64px] sm:text-[64px] text-[32px] bg-[#86f6d1] flex justify-center items-center absolute shadow-[2px_2px_3px_3px_#999899] '>¥</div>
      <div className='lg:h-[130px] lg:w-[130px] md:h-[90px] md:w-[90px] sm:h-[94px] sm:w-[94px] h-[64px] w-[64px] rounded-[70px] top-[76%] left-[-12%] lg:text-[80px] md:text-[80px] sm:text-[80px] text-[40px] bg-[#fc6da9] flex justify-center items-center absolute shadow-[2px_2px_3px_3px_#999899]'>€</div>
      <div className='lg:h-[96px] lg:w-[96px] md:h-[96px] md:w-[96px] sm:h-[90px] sm:w-[90px] h-[42px] w-[42px] rounded-[50px] top-[70%] left-[95%] lg:text-[54px] md:[54px] sm:text-[54px] text-[27px] bg-[#f78cd1] flex justify-center items-center absolute shadow-[2px_2px_3px_3px_#999899]'>$</div>
      <div className='lg:h-[74px] lg:w-[74px] md:h-[74px] md:w-[74px] sm:h-[74px] sm:w-[74px] h-[46px] w-[46px] rounded-[50px] top-[20%] left-[-5%] lg:text-[40px] md:[40px] sm:[40px] text-[28px] bg-[#83f2f4] flex justify-center items-center absolute shadow-[2px_2px_3px_3px_#999899]'>₣</div>
      <div className='lg:h-[84px] lg:w-[84px] md:h-[84px] md:w-[84px] sm:h-[84px] sm:w-[84px] h-[52px] w-[52px] rounded-[50px] top-[94%] left-[34%] lg:text-[50px] md:text-[50px] text-[34px] bg-[#7ba4ef] flex justify-center items-center absolute shadow-[2px_2px_3px_3px_#999899]'>£</div>

      <div className="flex flex-col h-[600px] rounded-[14px] px-[0px] py-[60px] bg-slate-100 shadow-[2px_2px_2px_2px_#c1c2c4]">
        <div className='lg:text-4xl text-3xl text-center mt-[0px] mx-[0px] mb-[30px] font-bold'>CURRENCY CONVERTER</div>

        <div className='flex flex-col gap-[10px] mt-[30px] mb-[10px] lg:mx-[70px] md:mx-[50px] sm:mx-[50px] mx-[26px] lg:text-3xl md:text-2xl text-xl'>
          <div>AMOUNT</div>
          <input onChange={(e) => setUserInputVal(e.target.value)} className="lg:text-3xl md:text-2xl text-sm p-[10px] rounded-[4px]  shadow-[2px_2px_3px_3px_#c5c5c7]" placeholder='Enter amount to be converted'></input>
        </div>

        <div className='flex justify-between mt-[30px] mb-[0px] lg:mx-[70px] md:mx-[50px] sm:mx-[50px] mx-[26px] lg:text-3xl md:text-2xl text-xl'>
          <div>FROM</div>
          <div>TO</div>
        </div>

        <div className='flex items-center px-[0px] py-[10px] justify-between my-[0px] lg:mx-[70px] md:mx-[50px] sm:mx-[50px] mx-[26px] lg:text-3xl md:text-2xl text-xl'>
          <select onChange={(e) => displayDescriptionFrom(e)} className='w-[44%] shadow-[2px_2px_3px_3px_#c5c5c7] p-[4px] rounded-[4px]'>
            <option>Select</option>
            {keyArray.map((key, i) => {
              return <option key={i} value={symbols[key].code} className='flex flex-col gap-[5px]'>{symbols[key].code}
              </option>
            })}
          </select>

          <span className="lg:text-4xl md:text-3xl text-2xl material-symbols-rounded">
            swap_horiz
          </span>

          <select onChange={(e) => displayDescriptionTo(e)} className='w-[44%] shadow-[2px_2px_3px_3px_#c5c5c7] p-[4px] lg:text-3xl md:text-2xl text-xl rounded-[4px]'>
            <option >Select</option>
            {keyArray.map((key, i) => {
              return <option value={symbols[key].code} key={i} className='flex flex-col gap-[5px]'>{symbols[key].code}</option>
            })}
          </select>
        </div>

        <div className='flex justify-between mt-[5px] mb-[0px] lg:mx-[70px] md:mx-[50px] sm:mx-[50px] mx-[26px] lg:text-3xl md:text-xl text-md h-[44px]'>
          <div className='w-[44%]'>
            {selectedToOption && <div>{symbols[selectedToOption].description}</div>}
          </div>

          <div className='w-[44%]'>
            {selectedFromOption && <div>{symbols[selectedFromOption].description}</div>}
          </div>
        </div>

        <div className='flex justify-center items-center font-bold mt-20 lg:gap-10 md:gap-8 sm:gap-4 gap-1 lg:text-3xl md:text-2xl text-xl rounded-[5px] '>
          {selectedFromOption && selectedToOption && <div className='unit-before'>{conversionData.query.amount * Number(userInputVal)} {conversionData.query.from}</div>}
          {selectedFromOption && <div>=</div>}
          {selectedToOption && selectedFromOption && <div className='unit-amount-after'>{(conversionData.result * Number(userInputVal)).toFixed(2)} {conversionData.query.to}</div>}
        </div>
      </div>
    </div>
  )
}
