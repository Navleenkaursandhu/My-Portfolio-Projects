
import dividerImage from './assets/divider.png'
import detailsbackground from './assets/details-background.png'
import { DateInput } from './components/DateInput'
export const Information = (props) => {
  return (
    <div className="mb-2 ml-4 border-gray-250 border-2 w-[48rem] m-1 bg-no-repeat bg-bottom bg-contain font-apply bg-info-background p-4" style={{ backgroundImage: `url('${detailsbackground}')` }}>
      <div className="text-center text-3xl">DETAILS</div>
      <div className="overflow-auto h-5/6 p-0.5">
        <div className="text-center pt-4 px-0 pb-2.5 text-lg">FAMILY DETAILS</div>
        <div className="flex gap-[1rem]">
          <div className="flex flex-col gap-5">
            <div>GROOM SIDE</div>
            <div className="flex gap-2 items-center">Name:
              <input value={props.value.groomName} onChange={e => props.onChange({ ...props.value, groomName: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
            </div>
            <div className="flex gap-2 items-center">Father&apos;s Name:
              <input value={props.value.groomFatherName} onChange={e => props.onChange({ ...props.value, groomFatherName: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
            </div>
            <div className="flex gap-2 items-center">Mother&apos;s Name:
              <input value={props.value.groomMotherName} onChange={e => props.onChange({ ...props.value, groomMotherName: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
            </div>
            <div className="flex gap-2 items-center">RSVP Contact No:
              <input value={props.value.groomRSVP} onChange={e => props.onChange({ ...props.value, groomRSVP: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div>BRIDE  SIDE</div>
            <div className="flex gap-2 items-center">Name:
              <input value={props.value.brideName} onChange={e => props.onChange({ ...props.value, brideName: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
            </div>
            <div className="flex gap-2 items-center">Father&apos;s Name:
              <input value={props.value.brideFatherName} onChange={e => props.onChange({ ...props.value, brideFatherName: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
            </div>
            <div className="flex gap-2 items-center">Mother&apos;s Name:
              <input value={props.value.brideMotherName} onChange={e => props.onChange({ ...props.value, brideMotherName: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
            </div>
            <div className="flex gap-2 items-center">RSVP Contact No:
              <input value={props.value.brideRSVP} onChange={e => props.onChange({ ...props.value, brideRSVP: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
            </div>
          </div>
        </div>

        <div className='flex justify-center'>
          <img className="text-center w-1/2 mt-2" src={dividerImage} />
        </div>

        <div className="text-center pt-4 px-0 pb-2.5 text-lg">WEDDING DAY DETAILS</div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-[8rem]">
            <div className="flex gap-2 items-center">Date:
              <DateInput date={props.value.weddingDate} onDateChange={newDate => props.onChange({ ...props.value, weddingDate: newDate })} />
            </div>
            <div className="flex gap-2 items-center">Venue:
              <input value={props.value.weddingVenue} onChange={e => props.onChange({ ...props.value, weddingVenue: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
            </div>
          </div>
        </div>

        <div className='flex justify-center'>
          <img className="text-center w-1/2 mt-2" src={dividerImage} />
        </div>

        <div className='text-center pt-4 px-0 pb-2.5 text-lg'>PRE-WEDDING EVENT DETAILS</div>
        <div className='flex flex-col gap-5'>

          <div className='flex gap-2 items-center'>Event Type:
            <input value={props.value.preWeddingEventType} onChange={e => props.onChange({ ...props.value, preweddingEventType: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
          </div>

          <div className='flex gap-[8rem]'>
            <div className='flex gap-2 items-center'>Date:
              <DateInput date={props.value.preweddingEventDate} onDateChange={newDate => props.onChange({ ...props.value, preweddingEventDate: newDate })} className='bg-slate-100 pl-1.5 py-0.5'/>
            </div>
            <div className='flex gap-2 items-center'>Venue:
              <input value={props.value.preweddingEventVenue} onChange={e => props.onChange({ ...props.value, preweddingEventVenue: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
            </div>
          </div>
        </div>

        <div className='flex justify-center'>
          <img className="text-center w-1/2 mt-2" src={dividerImage} />
        </div>

        <div className='text-center pt-4 px-0 pb-2.5 text-lg'>POST-WEDDING EVENT DETAILS</div>
        <div className='flex flex-col gap-5'>

          <div className='flex gap-2 items-center'>Event Type:
            <input value={props.value.postweddingEventType} onChange={e => props.onChange({ ...props.value, postweddingEventType: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
          </div>

          <div className='flex gap-[8rem]'>
            <div className='flex gap-2 items-center'>Date:
              <DateInput date={props.value.postweddingEventDate} onDateChange={newDate => props.onChange({ ...props.value, postweddingEventDate: newDate })} className='bg-slate-100 pl-1.5 py-0.5'/>
            </div>
            <div className='flex gap-2 items-center'>Venue:
              <input value={props.value.postweddingEventVenue} onChange={e => props.onChange({ ...props.value, postweddingEventVenue: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
