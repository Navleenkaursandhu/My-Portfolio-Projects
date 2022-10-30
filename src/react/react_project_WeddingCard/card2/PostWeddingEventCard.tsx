import { format } from 'date-fns'
import cardBackground from '../assets/card2-background.png'
export const PostWeddingEventCard = (props) => {
  return (
    <>
      <div className="relative font-applyAmiko">
        <img className='w-full' src={cardBackground} />
        <div className='absolute flex items-center justify-center pl-[100px] pr-[100px] top-0 left-0 bottom-0 right-0 border border-[#c7be4b] shadow-xl '>

          {props.information.postweddingEventType &&
            <div className='bg-[#90ebb03b] border border-[#c7be4b] px-[32px] py-[25px] w-full backdrop-blur-[2px] text-center flex flex-col items-center gap-[10px]'>
              {props.information.postweddingEventType &&
                <div>
                  <div>WE WOULD BE DELIGHTED WITH YOUR PRESENCE AT THE</div>
                  <div className='font-applyFontCard2 text-[34px] text-[#f76e8a] font-bold'>{props.information.postweddingEventType}</div>
                  <div>of</div>
                </div>
              }

              <div>
                <div className='font-applyFontCard2 text-[#f76e8a] text-[34px] font-bold'>{props.information.groomName}</div>
                <div className='font-applyFontCard2 mt-[-14px] text-[34px]'>&amp;</div>
                <div className='font-applyFontCard2 mt-[-14px] text-[#f76e8a] text-[34px] font-bold'>{props.information.brideName}</div>
              </div>

              {props.information.postweddingEventDate && <div className='w-full'>
                <div>{format(props.information.postweddingEventDate, 'LLLL')}</div>
                <div className='flex items-center gap-[34px] w-full'>
                  <div className='flex-1 border-2 border-l-0 border-r-0 border-t-black border-b-black'>
                    <div>{format(props.information.postweddingEventDate, 'cccc')}</div>
                  </div>
                  <div className='text-[24px]'>{format(props.information.postweddingEventDate, 'd')}</div>
                  <div className='flex-1 border-2 border-l-0 border-r-0 border-t-black border-b-black'>
                    <div className='border-t-black border-b-black'>AT {format(props.information.postweddingEventDate, 'h:mm aaa')}</div>
                  </div>
                </div>
                <div>{format(props.information.postweddingEventDate, 'yyyy')}</div>
              </div>
              }

              <div>{props.information.postweddingEventVenue}</div>

              {(props.information.postweddingEventVenue) && <div>
                {props.information.groomRSVP && <div>RSVP</div>}
                <div className='flex gap-[20px]'>
                  {props.information.groomRSVP && <div>Groom Side: {props.information.groomRSVP}</div>}
                  {props.information.brideRSVP && <div>Bride Side: {props.information.brideRSVP}</div>}
                </div>
              </div>}
            </div>
          }
        </div>
      </div>
    </>
  )
}
