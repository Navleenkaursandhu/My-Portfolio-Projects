import { format } from 'date-fns'
import cardBackground from '../assets/card2-background.png'
export const MainCard = (props) => {
  return (
    <>
      <div className="mt-2 relative font-applyAmiko">
        <img className='w-[600px]' src={cardBackground} />
        <div className='absolute flex items-center pl-[100px] pr-[100px] top-0 left-0 bottom-0 right-0 border border-[#c7be4b] shadow-xl '>
          {props.information.groomName &&
            <div className='bg-[#ffd2c34d] border border-[#c7be4b] px-[32px] py-[25px] backdrop-blur-[2px] text-center flex flex-col items-center gap-[14px]'>
              {props.information.groomName && <div>WE GRACIOUSLY INVITE YOU TO HONOR US WITH YOUR PRESENCE &amp; BLESSINGS
                ON THE AUSPICIOUS OCCASION OF THE WEDDING CEREMONY OF
              </div>}

              <div>
                <div className='text-[36px] font-bold text-[#c7be4b] font-applyFontCard2'>{props.information.groomName}</div>
                {props.information.groomFatherName && <div className='mt-[-6px]'>s/o {props.information.groomFatherName}&nbsp;
                  <span>&amp;&nbsp;{props.information.groomMotherName}</span>
                </div>}
              </div>

              {props.information.brideName && <div>WITH</div>}

              <div>
                <div className='text-[36px] font-bold text-[#c7be4b] font-applyFontCard2'>{props.information.brideName}</div>
                {props.information.brideFatherName && <div className='mt-[-6px]'>d/o {props.information.brideFatherName}&nbsp;
                  <span>&amp;&nbsp;{props.information.brideMotherName}</span>
                </div>}
              </div>

              <div className='w-full'>
                {props.information.weddingDate && <div>{format(props.information.weddingDate, 'LLLL')}</div>}
                {props.information.weddingDate &&
                  <div className='flex items-center gap-[34px] w-full'>

                    <div className='flex-1 border-2 border-l-0 border-r-0 border-t-black border-b-black'>
                      <div>{format(props.information.weddingDate, 'cccc')}</div>
                    </div>
                    <div className='text-[24px]'>{format(props.information.weddingDate, 'd')}</div>
                    <div className='flex-1 border-2 border-l-0 border-r-0 border-t-black border-b-black'>
                      <div className='border-t-black border-b-black'>AT {format(props.information.weddingDate, 'h:mm aaa')}</div>
                    </div>
                  </div>
                }
                {props.information.weddingDate && <div>{format(props.information.weddingDate, 'yyyy')}</div>}
              </div>

              <div>{props.information.weddingVenue}</div>

              <div>
                {props.information.groomRSVP && <div>RSVP</div>}
                <div className='flex gap-[20px]'>
                  {props.information.groomRSVP && <div>Groom Side: {props.information.groomRSVP}</div>}
                  {props.information.brideRSVP && <div>Bride Side: {props.information.brideRSVP}</div>}
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </>
  )
}
