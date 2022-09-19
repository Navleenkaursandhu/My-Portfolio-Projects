import cardBackground from '../assets/card1-background.png'

export const Card = (props) => {
  console.log(props.information)
  return (
    <div className='flex items-center flex-col border border-black flex-1'>
    <div className="m-1  text-7xl bg-no-repeat bg-cover w-[600px] border border-black" style={{ backgroundImage: `url(${cardBackground})` }}>
      <div className='h-full flex flex-col justify-center items-center gap-8'>
        <div className='text-lg flex flex-col items-center font-applyOnCard font-semibold'>
        <div>
          <div>{props.information.groomFatherName} &amp;&nbsp;
            <span>{props.information.groomMotherName}</span>
          </div>
        </div>
        <div>Together With</div>
        <div>
          <div>{props.information.brideFatherName} &amp;&nbsp;
            <span>{props.information.brideMotherName}</span>
          </div>
        </div>
        </div>

        <div className='text-2xl font-applyOnCard'>Joyfully invite you to celebrate the marriage of their children</div>
        <div className='text-4xl flex flex-col font-applyOnCard items-center font-extrabold text-[#ff0254]'>
          <div>{props.information.groomName}</div>
          <div>&amp;</div>
          <div>{props.information.brideName}</div>
        </div>

        <div className='text-2xl font-applyOnCard flex border border-black'>
        <div className='flex flex-col p-1.5 border border-black'>1</div>
        <div>2</div>
        <div>3</div>
        </div>
      </div>
    </div>
    </div>
  )
}
