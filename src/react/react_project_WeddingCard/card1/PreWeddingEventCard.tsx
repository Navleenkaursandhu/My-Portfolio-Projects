import { format } from 'date-fns'
import cardBackground from '../assets/card1-background.png'
export const PreWeddingEventCard = (props) => {
  return (
    <>
      <div className="relative text-center" >
        <img className='w-full hue-rotate-[212deg]' src={cardBackground} />
        <div className='absolute  text-[#575353] top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center pl-[140px] pr-[140px] border border-groove shadow-xl gap-[26px]'>
          {props.information.preweddingEventType && <div className='font-applyFont text-[18px]'>PLEASE JOIN US TO CELEBRATE</div>}
          <div className='font-applyOnCard font-semibold text-[34px] text-[#2e7bd5f2]'>{props.information.preweddingEventType}</div>

          {props.information.preweddingEventDate &&
            <div className='text-[18px] font-applyFont flex'>
              <div className='flex flex-col font-semibold pr-[10px] items-end border-r-2 border-slate-500'>
                <div>{format(props.information.preweddingEventDate, 'EEEE')}</div>
                <div>{format(props.information.preweddingEventDate, 'h:mm aaa')}</div>
              </div>
              <div className='flex items-center pl-[10px] pr-[10px] font-semibold text-[32px] border-r-2 border-slate-500'>{props.information.preweddingEventDate && format(props.information.preweddingEventDate, 'dd')}</div>
              <div className='flex flex-col font-semibold pl-[10px] items-start' >
                <div>{format(props.information.preweddingEventDate, 'MMMM')}</div>
                <div>{format(props.information.preweddingEventDate, 'yyyy')}</div>
              </div>
            </div>
          }

          {props.information.preweddingEventVenue && <div className='font-applyFont text-[18px]'>{props.information.preweddingEventVenue}</div>}

          {(props.information.preweddingEventVenue) && <div className='text-[16px] font-applyFont'>
            <div>RSVP</div>
            <div>{`Groom Side: ${props.information.groomRSVP}`}</div>
            <div>{`Bride Side: ${props.information.brideRSVP}`}</div>
          </div>
          }
        </div>
      </div>
    </>
  )
}
