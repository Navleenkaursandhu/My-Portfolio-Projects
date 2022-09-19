import cardBackground from '../assets/card1-background.png'

export const Card = (props) => {
  console.log(props.information)
  return (
    <div className="m-1 text-[#575353] relative text-7xl bg-no-repeat bg-cover" style={{ backgroundImage: `url(${cardBackground})` }}>
      <img className='w-[600px]' src={cardBackground} />
      <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center pl-[140px] pr-[140px] pt-[40px] border border-groove shadow-2xl gap-[16px]'>
        <div className='gap-[5px] text-[20px] font-semibold text-center flex flex-col items-center font-applyFont'>
          <div>
            <div>{props.information.groomFatherName}&nbsp;
              {props.information.groomMotherName && <span>&amp;</span>}&nbsp;
              <span>{props.information.groomMotherName}</span>
            </div>
          </div>
          {props.information.groomMotherName && <div className='font-applyOnCard text-[24px]'>Together With</div>}
          <div>
            <div>{props.information.brideFatherName}&nbsp;
              {props.information.brideMotherName && <span>&amp;</span>}&nbsp;
              <span>{props.information.brideMotherName}</span>
            </div>
          </div>
        </div>

        {props.information.brideMotherName && <div className='text-[20px] text-center font-applyFont'>Joyfully invite you to celebrate the marriage of their children</div>}

        <div className='text-[32px] text-[#c7568e] text-center flex flex-col font-applyOnCard items-center font-extrabold'>
          <div>{props.information.groomName}</div>
          {props.information.groomName && <div>&amp;</div>}
          <div>{props.information.brideName}</div>
        </div>

        <div className='text-[20px] font-applyFont flex'>
          <div className='flex flex-col font-semibold pr-[10px] items-end border-r-2 border-slate-500'>
            <div>{props.information.weddingWeekDay}</div>
            <div>{props.information.weddingTime}</div>
          </div>
          <div className='flex items-center pl-[10px] pr-[10px] font-semibold text-[36px] border-r-2 border-slate-500'>{props.information.weddingDate}</div>
          <div className='flex flex-col font-semibold pl-[10px] items-start' >
            <div>{props.information.weddingMonth}</div>
            <div>{props.information.weddingYear}</div>
          </div>
        </div>

        <div className='text-[20px] font-applyFont text-center'>{props.information.weddingVenue}</div>

        <div className='text-[18px] font-applyFont text-center '>
          {(props.information.groomRSVP || props.information.brideRSVP) && <div>RSVP</div>}
          <div>
            {props.information.groomRSVP && 'Groom Side:'}
            {props.information.groomRSVP}</div>
          <div>
            {props.information.brideRSVP && 'Bride Side:'}
             {props.information.brideRSVP}</div>
        </div>
      </div>
    </div>
  )
}
