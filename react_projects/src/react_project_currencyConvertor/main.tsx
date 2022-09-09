import './style.css'
export const Main = () => {






  
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
          <select className='from'>USD</select>
          <span className="from-to material-symbols-rounded">
            swap_horiz
          </span>
          <select className='to'>CAD</select>
        </div>

        <div className='unit-value-container'>
          <div className='unit-before'>1 RUPEE</div>
          <div>=</div>
          <div className='unit-amount-after'>60 DOLLARS </div>
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