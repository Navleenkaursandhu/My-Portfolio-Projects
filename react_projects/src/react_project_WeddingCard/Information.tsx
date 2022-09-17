import dividerImage from './assets/divider.png'
import detailsbackground from './assets/details-background.png'
export const Information = () => {
  return (
    <div className="border-gray-700 border-2 w-[52rem] m-1 bg-no-repeat bg-bottom bg-[length:500px_65px] font-apply bg-info-background p-4" style={{ backgroundImage: `url('${detailsbackground}')` }}>
      <div className="text-center text-3xl">DETAILS</div>

      <div className="overflow-auto h-5/6 p-0.5">
        <div className="text-center pt-4 px-0 pb-2.5 text-lg">FAMILY DETAILS</div>
        <div className="flex gap-[1rem]">
          <div className="flex flex-col gap-5">
            <div>BRIDE  SIDE</div>
            <div className="flex gap-2 items-center">Name:
              <input className='bg-slate-100'></input>
            </div>
            <div className="flex gap-2 items-center">Father&apos;s Name:
              <input className='bg-slate-100'></input>
            </div>
            <div className="flex gap-2 items-center">Mother&apos;s Name:
              <input className='bg-slate-100'></input>
            </div>
            <div className="flex gap-2 items-center">Grandfather&apos;s Name:
              <input className='bg-slate-100'></input>
            </div>
            <div className="flex gap-2 items-center">Grandmother&apos;s Name:
              <input className='bg-slate-100'></input>
            </div>
            <div className="flex gap-2 items-center">Address:
              <input className='bg-slate-100'></input>
            </div>
            <div className="flex gap-2 items-center">RSVP Contact No:
              <input className='bg-slate-100'></input>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div>GROOM SIDE</div>
            <div className="flex gap-2 items-center">Name:
              <input className='bg-slate-100'></input>
            </div>
            <div className="flex gap-2 items-center">Father&apos;s Name:
              <input className='bg-slate-100'></input>
            </div>
            <div className="flex gap-2 items-center">Mother&apos;s Name:
              <input className='bg-slate-100'></input>
            </div>
            <div className="flex gap-2 items-center">Grandfather&apos;s Name:
              <input className='bg-slate-100'></input>
            </div>
            <div className="flex gap-2 items-center">Grandmother&apos;s Name:
              <input className='bg-slate-100'></input>
            </div>
            <div className="flex gap-2 items-center">Address:
              <input className='bg-slate-100'></input>
            </div>
            <div className="flex gap-2 items-center">RSVP Contact No:
              <input className='bg-slate-100'></input>
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
              <input className='bg-slate-100'></input>
            </div>
            <div className="flex gap-10 items-center">Day:
              <input className='bg-slate-100'></input>
            </div>
          </div>
          <div className="flex gap-[8rem]">
            <div className="flex gap-2 items-center">Time:
              <input className='bg-slate-100'></input>
            </div>
            <div className="flex gap-2 items-center">Venue:
              <input className='bg-slate-100'></input>
            </div>
          </div>
        </div>

        <div className='flex justify-center'>
          <img className="text-center w-1/2 mt-2" src={dividerImage} />
        </div>

        <div className='text-center pt-4 px-0 pb-2.5 text-lg'>PRE-WEDDING EVENT DETAILS</div>
        <div className='flex flex-col gap-5'>

          <div className='flex gap-2 items-center'>Event Type:
            <input className='bg-slate-100'></input>
          </div>

          <div className='flex gap-[8rem]'>
            <div className='flex gap-2 items-center'>Date:
              <input className='bg-slate-100'></input>
            </div>
            <div className='flex gap-2 items-center'>Day:
              <input className='bg-slate-100'></input>
            </div>
          </div>

          <div className='flex gap-[8rem]'>
            <div className='flex gap-2 items-center'>Time:
              <input className='bg-slate-100'></input>
            </div>
            <div className='flex gap-2 items-center'>Venue:
              <input className='bg-slate-100'></input>
            </div>
          </div>
        </div>

        <div className='flex justify-center'>
          <img className="text-center w-1/2 mt-2" src={dividerImage} />
        </div>

        <div className='text-center pt-4 px-0 pb-2.5 text-lg'>POST-WEDDING EVENT DETAILS</div>
        <div className='flex flex-col gap-5'>

          <div className='flex gap-2 items-center'>Event Type:
            <input className='bg-slate-100'></input>
          </div>

          <div className='flex gap-[8rem]'>
            <div className='flex gap-2 items-center'>Date:
              <input className='bg-slate-100'></input>
            </div>
            <div className='flex gap-2 items-center'>Day:
              <input className='bg-slate-100'></input>
            </div>
          </div>

          <div className='flex gap-[8rem]'>
            <div className='flex gap-2 items-center'>Time:
              <input className='bg-slate-100'></input>
            </div>
            <div className='flex gap-2 items-center'>Venue:
              <input className='bg-slate-100'></input>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
