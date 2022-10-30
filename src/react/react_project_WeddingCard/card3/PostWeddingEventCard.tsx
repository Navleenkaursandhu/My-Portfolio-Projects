import { format } from 'date-fns'
import cardBackground from '../assets/card3-background.jpg'
export const PostWeddingEventCard = (props) => {
  return (
    <>
      <div className="relative font-applyMukta">
        <img className='w-full' src={cardBackground} />
        <div className='absolute flex items-center justify-center pl-[110px] pr-[110px] top-0 left-0 bottom-0 right-0 border border-[#cdba86] shadow-xl '>
          <div className='text-[#cdba86] backdrop-blur-[2px] text-center flex flex-col items-center gap-[14px]'>
            {props.information.postweddingEventType && <div>WITH THE BLESSINGS OF ALMIGHTY</div>}
            {props.information.postweddingEventType &&
              <div className='font-applyPassions text-[40px]'>
                <div>Bride</div>
                <div className='mt-[-20px]'>&amp;</div>
                <div className='mt-[-20px]'>Groom</div>
              </div>
            }

            {props.information.postweddingEventType && <div>Cordially request the pleasure of your company on the joyous occasion of thier</div>}

            <div className='font-applyPassions text-[40px]'>{props.information.postweddingEventType}</div>

            {props.information.postweddingEventDate &&
              <div className='flex items-center gap-[10px] border border-y-[#cdba86] border-x-0'>
                <div>{format(props.information.postweddingEventDate, 'cccc')}</div>
                <div>{format(props.information.postweddingEventDate, 'LLLL')}</div>
                <div>{format(props.information.postweddingEventDate, 'd')}</div>
                <div>{format(props.information.postweddingEventDate, 'yyyy')}</div>
                <div>{format(props.information.postweddingEventDate, 'h:mm aaa')}</div>
              </div>}

            {props.information.postweddingEventVenue &&
              <div>
                <div>VENUE</div>
                <div>{props.information.postweddingEventVenue}</div>
              </div>}

              {(props.information.postweddingEventVenue) && <div>
              {props.information.groomRSVP && <div>RSVP</div>}
              {props.information.groomRSVP && <div>Groom Side: {props.information.groomRSVP}</div>}
              {props.information.brideRSVP && <div>Bride Side: {props.information.brideRSVP}</div>}
            </div>}
          </div>
        </div>
      </div>
    </>
  )
}
