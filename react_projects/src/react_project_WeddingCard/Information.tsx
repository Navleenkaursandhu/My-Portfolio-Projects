
import dividerImage from './assets/divider.png'
import { DateInput } from './components/DateInput'
export const Information = (props) => {
  return (
    <div className="overflow-auto ml-4 border-gray-250 border-2 w-[48rem] m-1 bg-no-repeat bg-bottom bg-contain font-apply bg-info-background p-4">
      <div className="text-center text-3xl">Templates</div>
      <div className="text-center pt-4 px-0 pb-2.5 text-lg">FAMILY DETAILS</div>

      <div className='flex'>
        <table className='w-1/2 border-separate border-spacing-[10px]'>
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

        <table className='w-1/2 border-separate border-spacing-[10px]'>
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
      <div className='flex justify-center'>
        <img className="text-center w-1/2 mt-2" src={dividerImage} />
      </div>

      <div className="text-center pt-4 px-0 pb-2.5 text-lg">WEDDING DAY DETAILS</div>

      <div className='flex'>
        <table className='w-1/2 border-separate border-spacing-[10px]'>
          <tbody>
            <tr>
              <td>Venue:</td>
              <td><input value={props.value.weddingVenue} onChange={e => props.onChange({ ...props.value, weddingVenue: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input></td>
            </tr>
          </tbody>
        </table>
        <table className='w-1/2 border-separate border-spacing-[10px]'>
          <tbody>
            <tr>
              <td>Date:</td>
              <td><DateInput date={props.value.weddingDate} onDateChange={newDate => props.onChange({ ...props.value, weddingDate: newDate })} /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='flex justify-center'>
        <img className="text-center w-1/2 mt-2" src={dividerImage} />
      </div>

      <div className='text-center pt-4 px-0 pb-2.5 text-lg'>PRE-WEDDING EVENT DETAILS</div>

      <div className='flex'>
        <table className='w-1/2 border-separate border-spacing-[10px]'>
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

        <table className='w-1/2 border-separate border-spacing-[10px]'>
          <tr>
            <td>Date:</td>
            <td><DateInput date={props.value.preweddingEventDate} onDateChange={newDate => props.onChange({ ...props.value, preweddingEventDate: newDate })} className='bg-slate-100 pl-1.5 py-0.5' /></td>
          </tr>
        </table>
      </div>

      <div className='flex justify-center'>
        <img className="text-center w-1/2 mt-2" src={dividerImage} />
      </div>

      <div className='text-center pt-4 px-0 pb-2.5 text-lg'>POST-WEDDING EVENT DETAILS</div>

      <div className='flex'>
        <table className='w-1/2 border-separate border-spacing-[10px] '>
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

        <table className='w-1/2 border-separate border-spacing-[10px]'>
          <tr>
            <td>Date:</td>
            <td><DateInput date={props.value.postweddingEventDate} onDateChange={newDate => props.onChange({ ...props.value, postweddingEventDate: newDate })} className='bg-slate-100 pl-1.5 py-0.5' /></td>
          </tr>
        </table>
      </div>
    </div>
  )
}
