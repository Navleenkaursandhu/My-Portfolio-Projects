import { format } from 'date-fns'
import cardBackground from '../assets/card4-background.jpg'
export const PostWeddingEventCard = (props) => {
  return (
    <>
      <div className="relative font-applyMukta">
        <img className='w-full hue-rotate-[244deg]' src={cardBackground} />
        <div className='absolute flex-col items-center justify-center pl-[110px] pr-[110px] top-0 left-0 bottom-0 right-0 border-4 border-[#cba967] shadow-xl '>
          <div className='text-[#cdba86] h-[60%] text-center flex flex-col justify-center items-center gap-[14px]'>
            {props.information.postweddingEventType &&
              <div className='text-[20px]'>
                <div >Please join us to celebrate</div>
                <div>the <span className='text-[30px] font-applyNiconne'>{props.information.postweddingEventType}</span> of</div>
              </div>}

            {props.information.postweddingEventType &&
              <div className='font-applyNiconne text-[36px]'>
                <div className='leading-10'>
                  <div>Bride</div>
                  <div>{props.information.brideName}</div>
                </div>
                <div>&amp;</div>
                <div className='leading-10'>
                  <div>Groom</div>
                  <div>{props.information.groomName}</div>
                </div>
              </div>
            }
          </div>

          <div className='text-[18px] text-[#792764] h-[40%] text-center pt-[40px] flex flex-col justify-center items-center gap-[18px]'>
            {props.information.postweddingEventDate &&
              <div className='flex items-center text-[28px] font-applyNiconne'>
                <div className='border-r-2 border-[#a65795] pr-[10px]'>{format(props.information.postweddingEventDate, 'cccc')}</div>
                <div className='border-r-2 border-[#a65795] pl-[10px] pr-[10px]'>{format(props.information.postweddingEventDate, 'LLLL d yyyy')}</div>
                <div className='pl-[10px]'>{format(props.information.postweddingEventDate, 'h:mm aaa')}</div>
              </div>}

            {props.information.postweddingEventVenue &&
              <div>
                <div className='text-[28px] font-applyNiconne'>Venue</div>
                <div className='text-[16px]'>{props.information.postweddingEventVenue}</div>
              </div>}

            {(props.information.postweddingEventVenue) && <div>
              {props.information.groomRSVP && <div className='text-[28px] font-applyNiconne'>Rsvp</div>}
              <div className='text-[16px] flex gap-[20px]'>
                {props.information.groomRSVP && <div>Groom Side: {props.information.groomRSVP}</div>}
                {props.information.brideRSVP && <div>Bride Side: {props.information.brideRSVP}</div>}
              </div>
            </div>}
          </div>
        </div>
      </div>
    </>
  )
}
