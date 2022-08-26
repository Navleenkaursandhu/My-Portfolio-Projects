import image from './assets/image.jpg'
export const Input = () => {



  return (
    <>
      <div className='container'>
        <img className='background' src={image} />
        <div className='ui-container'>
          <div className='title'>
            Tip Calculator
          </div>

          <div className='total-cost'>
            <div>Total Cost in Dollars:</div>
            <input
              placeholder='Enter bill total'></input>
          </div>

          <div className='tip-amount'>
            <div>Tip %:</div>
            <input
              placeholder='Enter tip percentage'></input>
          </div>

          <div className='split'>
            Split:
            <div className='add'>+</div>
            <div>0</div>
            <div className='subtract'>-</div>
          </div>

          <div className='total-per-person'>Total per Person
          </div>

          <div className='split-amount'></div>
        </div>
      </div>
    </>
  )
}