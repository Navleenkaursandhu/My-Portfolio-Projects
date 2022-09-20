import { format } from 'date-fns'
import cardBackground from '../assets/card1-background.png'

export const MainCard = (props) => {
  return (
    <div className="m-1 relative">
      <img className='w-[600px]' src={cardBackground} />
      <div className='absolute  text-[#575353] top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center pl-[140px] pr-[140px] pt-[56px] border border-groove shadow-xl gap-[6px]'>
        <div className='text-[18px] font-semibold text-center flex flex-col items-center font-applyFont'>
          <div>
            <div>{props.information.groomFatherName}&nbsp;
              {props.information.groomMotherName && <span>&amp;</span>}&nbsp;
              <span>{props.information.groomMotherName}</span>
            </div>
          </div>
          {props.information.groomMotherName && <div className='font-applyOnCard text-[20px]'>Together With</div>}
          <div>
            <div>{props.information.brideFatherName}&nbsp;
              {props.information.brideMotherName && <span>&amp;</span>}&nbsp;
              <span>{props.information.brideMotherName}</span>
            </div>
          </div>
        </div>

        {props.information.brideMotherName && <div className='text-[18px] text-center font-applyFont'>Joyfully invite you to celebrate the marriage of their children</div>}

        <div className='text-[28px] text-[#c7568e] text-center font-applyOnCard font-extrabold'>
          <div>{props.information.groomName}</div>
          {props.information.groomName && <div>&amp;</div>}
          <div>{props.information.brideName}</div>
        </div>

        <div className='text-[18px] font-applyFont flex'>
          <div className='flex flex-col font-semibold pr-[10px] items-end border-r-2 border-slate-500'>
            <div>{props.information.weddingDate && format(props.information.weddingDate, 'EEEE')}</div>
            <div>{props.information.weddingDate && format(props.information.weddingDate, 'H:mm bbb')}</div>
          </div>
          <div className='flex items-center pl-[10px] pr-[10px] font-semibold text-[32px] border-r-2 border-slate-500'>{props.information.weddingDate && format(props.information.weddingDate, 'dd')}</div>
          <div className='flex flex-col font-semibold pl-[10px] items-start' >
            <div>{props.information.weddingDate && format(props.information.weddingDate, 'MMMM')}</div>
            <div>{props.information.weddingDate && format(props.information.weddingDate, 'yyyy')}</div>
          </div>
        </div>

        <div className='text-[18px] font-applyFont text-center'>{props.information.weddingVenue}</div>

        <div className='text-[16px] font-applyFont text-center '>
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
