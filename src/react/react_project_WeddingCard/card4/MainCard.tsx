import { format } from 'date-fns'
import cardBackground from '../assets/card4-background.jpg'
export const MainCard = (props) => {
  return (
    <>
      <div className="relative font-applyMukta">
        <img className='w-full' src={cardBackground} />
        <div className='absolute flex-col items-center justify-center top-0 left-0 bottom-0 right-0 border-4 border-[#cba967]'>

          <div className='text-[#cba967] text-center flex flex-col h-[60%] items-center justify-center gap-[18px]'>

            {props.information.groomName && <div className='text-[30px] font-applyNiconne'>Save The Date</div>}

            <div className='font-applyNiconne'>
              <div className='text-[36px]'>{props.information.groomName}</div>
              {props.information.groomName && <div className='text-[24px]'>Weds</div>}
              {<div className='text-[36px]'>{props.information.brideName}</div>}
            </div>

            <div className='text-[16px] font-bold'>
              <div>
                <div>{props.information.groomFatherName}&nbsp;
                  {props.information.groomMotherName && <span>&amp;</span>}&nbsp;
                  <span>{props.information.groomMotherName}</span>
                </div>
              </div>
              {props.information.groomMotherName && <div>Together With</div>}
              <div>
                <div>{props.information.brideFatherName}&nbsp;
                  {props.information.brideMotherName && <span>&amp;</span>}&nbsp;
                  <span>{props.information.brideMotherName}</span>
                </div>
              </div>
            </div>

            {props.information.brideMotherName &&
              <div>
                <div className='font-bold text-[16px]'>Cordially invite you to grace the auspicious occasion of their children</div>
                <div className='text-[34px] font-applyNiconne'>Wedding</div>
              </div>}
          </div>

          <div className='text-[18px] text-[#792764] h-[40%] text-center pt-[40px] flex flex-col items-center gap-[18px]'>
            {props.information.weddingDate &&
              <div className='flex items-center text-[28px] font-applyNiconne'>
                <div className='border-r-2 border-[#a65795] pr-[10px]'>{format(props.information.weddingDate, 'cccc')}</div>
                <div className='border-r-2 border-[#a65795] pl-[10px] pr-[10px]'>{format(props.information.weddingDate, 'LLLL d yyyy')}</div>
                <div className='pl-[10px]'>{format(props.information.weddingDate, 'h:mm aaa')}</div>
              </div>}

            {props.information.weddingVenue &&
              <div>
                <div className='text-[28px] font-applyNiconne'>Venue</div>
                <div className='text-[16px]'>{props.information.weddingVenue}</div>
              </div>}

            <div>
              {props.information.groomRSVP && <div className='text-[28px] font-applyNiconne'>Rsvp</div>}
              <div className='text-[16px] flex gap-[20px]'>
                {props.information.groomRSVP && <div>Groom Side: {props.information.groomRSVP}</div>}
                {props.information.brideRSVP && <div>Bride Side: {props.information.brideRSVP}</div>}
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
