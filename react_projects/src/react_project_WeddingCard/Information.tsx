
import dividerImage from './assets/divider.png'
import detailsbackground from './assets/details-background.png'
export const Information = (props) => {
  return (
    <div className="border-gray-700 border-2 w-[48rem] m-1 bg-no-repeat bg-bottom bg-[length:500px_65px] font-apply bg-info-background p-4" style={{ backgroundImage: `url('${detailsbackground}')` }}>
      <div className="text-center text-3xl">DETAILS</div>
      <div className="overflow-auto h-5/6 p-0.5">
        <div className="text-center pt-4 px-0 pb-2.5 text-lg">FAMILY DETAILS</div>
        <div className="flex gap-[1rem]">
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
            <div className="flex gap-2 items-center">Grandfather&apos;s Name:
              <input value={props.value.brideGrandFatherName} onChange={e => props.onChange({ ...props.value, brideGrandFatherName: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
            </div>
            <div className="flex gap-2 items-center">Grandmother&apos;s Name:
              <input value={props.value.brideGrandMotherName} onChange={e => props.onChange({ ...props.value, brideGrandMotherName: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
            </div>
            <div className="flex gap-2 items-center">Address:
              <input value={props.value.brideAddress} onChange={e => props.onChange({ ...props.value, brideAddress: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
            </div>
            <div className="flex gap-2 items-center">RSVP Contact No:
              <input value={props.value.brideRSVP} onChange={e => props.onChange({ ...props.value, brideRSVP: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
            </div>
          </div>

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
            <div className="flex gap-2 items-center">Grandfather&apos;s Name:
              <input value={props.value.groomGrandFatherName} onChange={e => props.onChange({ ...props.value, groomGrandFatherName: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
            </div>
            <div className="flex gap-2 items-center">Grandmother&apos;s Name:
              <input value={props.value.groomGrandMotherName} onChange={e => props.onChange({ ...props.value, groomGrandMotherName: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
            </div>
            <div className="flex gap-2 items-center">Address:
              <input value={props.value.groomAddress} onChange={e => props.onChange({ ...props.value, groomAddress: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
            </div>
            <div className="flex gap-2 items-center">RSVP Contact No:
              <input value={props.value.groomRSVP} onChange={e => props.onChange({ ...props.value, groomRSVP: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
            </div>
          </div>
        </div>

        <div className='flex justify-center'>
          <img className="text-center w-1/2 mt-2" src={dividerImage} />
        </div>

        <div className="text-center pt-4 px-0 pb-2.5 text-lg">WEDDING DAY DETAILS</div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-[8rem]">
            <div className="flex items-center">Date:
              <input value={props.value.weddingDate} onChange={e => props.onChange({ ...props.value, weddingDate: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
            </div>
            <div className="flex gap-10 items-center">Day:
              <input value={props.value.weddingDay} onChange={e => props.onChange({ ...props.value, weddingDay: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
            </div>
          </div>
          <div className="flex gap-[8rem]">
            <div className="flex gap-2 items-center">Time:
              <input value={props.value.weddingTime} onChange={e => props.onChange({ ...props.value, weddingTime: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
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
              <input value={props.value.preweddingEventDate} onChange={e => props.onChange({ ...props.value, preweddingEventDate: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
            </div>
            <div className='flex gap-2 items-center'>Day:
              <input value={props.value.preweddingEventDay} onChange={e => props.onChange({ ...props.value, preweddingEventDay: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
            </div>
          </div>

          <div className='flex gap-[8rem]'>
            <div className='flex gap-2 items-center'>Time:
              <input value={props.value.preweddingEventTime} onChange={e => props.onChange({ ...props.value, preweddingEventTime: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
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
              <input value={props.value.postweddingEventDate} onChange={e => props.onChange({ ...props.value, postweddingEventDate: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
            </div>
            <div className='flex gap-2 items-center'>Day:
              <input value={props.value.postweddingEventDay} onChange={e => props.onChange({ ...props.value, postweddingEventDay: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
            </div>
          </div>

          <div className='flex gap-[8rem]'>
            <div className='flex gap-2 items-center'>Time:
              <input value={props.value.postweddingEventTime} onChange={e => props.onChange({ ...props.value, postweddingEventTime: e.target.value })} className='bg-slate-100 pl-1.5 py-0.5'></input>
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
