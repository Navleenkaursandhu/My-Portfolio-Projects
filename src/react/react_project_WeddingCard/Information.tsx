import cardTemplate1 from './assets/card1-background.png'
import cardTemplate2 from './assets/card2-background.png'
import cardTemplate3 from './assets/card3-background.jpg'
import cardTemplate4 from './assets/card4-background.jpg'
import dividerLeft from './assets/divider-left.png'
import dividerRight from './assets/divider-right.png'
import { DateInput } from './components/DateInput'
export const Information = (props) => {
  return (
    <div className="overflow-auto xl:w-[50%] print:hidden font-apply p-4">

      <div className='flex justify-center gap-[4px]'>
        <img src={dividerLeft} className='h-[20px]' />
        <div className="text-center mb-[4px] text-lg">WEDDING CARD TEMPLATES</div>
        <img src={dividerRight} className='h-[20px]' />
      </div>

      <div className='flex flex-wrap justify-center gap-[10px]'>
        <img onClick={() => props.onTemplateChange(1)} src={cardTemplate1} className={`border-slate-200 border h-[90px] ${props.template === 1 ? 'border-4 border-[#b61853b8]' : ''}`} />
        <img onClick={() => props.onTemplateChange(2)} src={cardTemplate2} className={`border-slate-200 border h-[90px] ${props.template === 2 ? 'border-4 border-[#83bd93]' : ''}`} />
        <img onClick={() => props.onTemplateChange(3)} src={cardTemplate3} className={`border-slate-200 border h-[90px] ${props.template === 3 ? 'border-4 border-[#beab77]' : ''}`} />
        <img onClick={() => props.onTemplateChange(4)} src={cardTemplate4} className={`border-slate-200 border h-[90px] ${props.template === 4 ? 'border-4 border-[#BD8DAE]' : ''}`} />
      </div>

      <div className='flex justify-center pt-6 gap-[4px]'>
        <img src={dividerLeft} className='h-[20px]' />
        <div className="text-center text-lg">FAMILY DETAILS</div>
        <img src={dividerRight} className='h-[20px]' />
      </div>

      <div className='flex md:flex-row flex-col w-full'>
        <table className='w-1/2 border-separate border-spacing-[8px]'>
          <tbody>
            <tr><td>GROOM SIDE</td></tr>
            <tr>
              <td>Name:</td>
              <td><input value={props.value.groomName} onChange={e => props.onChange({ ...props.value, groomName: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input></td>
            </tr>

            <tr>
              <td>Father&apos;s Name:</td>
              <td><input value={props.value.groomFatherName} onChange={e => props.onChange({ ...props.value, groomFatherName: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input></td>
            </tr>

            <tr>
              <td>Mother&apos;s Name:</td>
              <td><input value={props.value.groomMotherName} onChange={e => props.onChange({ ...props.value, groomMotherName: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input></td>
            </tr>

            <tr>
              <td>RSVP Contact No:</td>
              <td><input value={props.value.groomRSVP} onChange={e => props.onChange({ ...props.value, groomRSVP: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input></td>
            </tr>
          </tbody>
        </table>

        <table className='w-1/2 border-separate border-spacing-[8px]'>
          <tbody>
            <tr><td>BRIDE SIDE</td></tr>
            <tr>
              <td>Name:</td>
              <td><input value={props.value.brideName} onChange={e => props.onChange({ ...props.value, brideName: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input></td>
            </tr>

            <tr>
              <td>Father&apos;s Name:</td>
              <td><input value={props.value.brideFatherName} onChange={e => props.onChange({ ...props.value, brideFatherName: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input></td>
            </tr>

            <tr>
              <td>Mother&apos;s Name:</td>
              <td><input value={props.value.brideMotherName} onChange={e => props.onChange({ ...props.value, brideMotherName: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input></td>
            </tr>

            <tr>
              <td>RSVP Contact No:</td>
              <td><input value={props.value.brideRSVP} onChange={e => props.onChange({ ...props.value, brideRSVP: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='flex justify-center pt-6 gap-[4px]'>
        <img src={dividerLeft} className='h-[20px]' />
        <div className="text-center text-lg">WEDDING DAY DETAILS</div>
        <img src={dividerRight} className='h-[20px]' />
      </div>

      <div className='flex md:flex-row flex-col'>
        <table className='w-1/2 border-separate border-spacing-[8px]'>
          <tbody>
            <tr>
              <td>Venue:</td>
              <td><input value={props.value.weddingVenue} onChange={e => props.onChange({ ...props.value, weddingVenue: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input></td>
            </tr>
          </tbody>
        </table>
        <table className='w-1/2 border-separate border-spacing-[8px]'>
          <tbody>
            <tr>
              <td>Date:</td>
              <td><DateInput date={props.value.weddingDate} onDateChange={newDate => props.onChange({ ...props.value, weddingDate: newDate })} /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='flex justify-center pt-6 gap-[4px]'>
        <img src={dividerLeft} className='h-[20px]' />
        <div className="text-center text-lg">PRE-WEDDING EVENT DETAILS</div>
        <img src={dividerRight} className='h-[20px]' />
      </div>

      <div className='flex md:flex-row flex-col'>
        <table className='w-1/2 border-separate border-spacing-[8px]'>
          <tbody>
            <tr>
              <td>Event Type:</td>
              <td><input value={props.value.preWeddingEventType} onChange={e => props.onChange({ ...props.value, preweddingEventType: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input></td>
            </tr>
            <tr>
              <td>Venue:</td>
              <td><input value={props.value.preweddingEventVenue} onChange={e => props.onChange({ ...props.value, preweddingEventVenue: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input></td>
            </tr>
          </tbody>
        </table>

        <table className='w-1/2 border-separate border-spacing-[8px]'>
          <tbody>
            <tr>
              <td>Date:</td>
              <td><DateInput date={props.value.preweddingEventDate} onDateChange={newDate => props.onChange({ ...props.value, preweddingEventDate: newDate })} className='bg-slate-100 pl-1.5 py-0.5' /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='flex justify-center pt-6 gap-[4px]'>
        <img src={dividerLeft} className='h-[20px]' />
        <div className="text-center text-lg">POST-WEDDING EVENT DETAILS</div>
        <img src={dividerRight} className='h-[20px]' />
      </div>

      <div className='flex md:flex-row flex-col'>
        <table className='w-1/2 border-separate border-spacing-[8px] '>
          <tbody>
            <tr>
              <td>Event Type:</td>
              <td><input value={props.value.postweddingEventType} onChange={e => props.onChange({ ...props.value, postweddingEventType: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input></td>
            </tr>
            <tr>
              <td>Venue:</td>
              <td><input value={props.value.postweddingEventVenue} onChange={e => props.onChange({ ...props.value, postweddingEventVenue: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input></td>
            </tr>
          </tbody>
        </table>

        <table className='w-1/2 border-separate border-spacing-[8px]'>
          <tbody>
            <tr>
              <td>Date:</td>
              <td><DateInput date={props.value.postweddingEventDate} onDateChange={newDate => props.onChange({ ...props.value, postweddingEventDate: newDate })} className='bg-slate-100 pl-1.5 py-0.5' /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
