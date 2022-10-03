import { format } from 'date-fns'
import cardBackground from '../assets/card3-background.jpg'
export const MainCard = (props) => {
  return (
    <>
      <div className=" mt-1 relative font-applyMukta">
        <img src={cardBackground} />
        <div className='absolute flex items-center justify-center pl-[110px] pr-[110px] top-0 left-0 bottom-0 right-0 border border-[#cdba86] shadow-xl '>
          <div className='text-[#cdba86] backdrop-blur-[2px] text-center flex flex-col items-center gap-[18px]'>
            {props.information.groomName && <div>TOGETHER WITH THEIR FAMILIES </div>}

            <div>
              <div className='text-[50px] leading-10 font-applyPassions'>{props.information.groomName}</div>
              {props.information.groomFatherName && <div>&#40;s/o {props.information.groomFatherName}&nbsp;
                <span>&amp;&nbsp;{props.information.groomMotherName}&#41;</span>
              </div>}

              {props.information.brideName && <div className='text-[38px] font-applyPassions'>&amp;</div>}

              <div className='text-[50px] leading-10 font-applyPassions'>{props.information.brideName}</div>
              {props.information.brideFatherName && <div>&#40;d/o {props.information.brideFatherName}&nbsp;
                <span>&amp;&nbsp;{props.information.brideMotherName}&#41;</span>
              </div>}
            </div>

            {props.information.brideMotherName &&
              <div>
                <div>REQUEST YOUR PRESENCE AT THEIR</div>
                <div className='text-[44px] font-applyPassions'>Wedding Ceremony</div>
              </div>}

            {props.information.weddingDate &&
              <div className='flex items-center gap-[10px] border border-y-[#cdba86] border-x-0'>
                <div>{format(props.information.weddingDate, 'cccc')}</div>
                <div>{format(props.information.weddingDate, 'LLLL')}</div>
                <div>{format(props.information.weddingDate, 'd')}</div>
                <div>{format(props.information.weddingDate, 'yyyy')}</div>
                <div>{format(props.information.weddingDate, 'h:mm aaa')}</div>
              </div>}

            {props.information.weddingVenue &&
              <div>
                <div>VENUE</div>
                <div>{props.information.weddingVenue}</div>
              </div>}

            <div>
              {props.information.groomRSVP && <div>RSVP</div>}
              {props.information.groomRSVP && <div>Groom Side: {props.information.groomRSVP}</div>}
              {props.information.brideRSVP && <div>Bride Side: {props.information.brideRSVP}</div>}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
