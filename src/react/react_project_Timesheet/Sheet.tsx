import { format, formatISO } from 'date-fns'

export const Sheet = (props) => {
  const object = props.timesheetArray
  const dateCurrent = formatISO(props.date, { representation: 'date' })
  const arrayToDisplay = object[dateCurrent]
  return (
    <>
      <div className="border-2 border-[#c5c4c4] rounded-md flex-1 h-[600px] overflow-auto md:p-2">
        <table className='w-full'>
          <tbody>
            {<tr>
              <th className='border border-[#c5c4c4] xl:text-3xl lg:text-2xl md:text-xl text-md '>EVENT</th>
              <th className='border border-[#c5c4c4] xl:text-3xl lg:text-2xl md:text-xl text-md  '>TIME</th>
              <th className='border border-[#c5c4c4] xl:text-3xl lg:text-2xl md:text-xl text-md '>DESCRIPTION</th>
            </tr>}

            {arrayToDisplay?.map((object, i) => {
              return <tr key={i}>
                <td className='border border[#c5c4c4] text-center xl:text-2xl lg:text-xl md:text-lg text-sm sm:p-2 p-0.5 whitespace-nowrap'>{object.eventType}</td>
                <td className='border border[#c5c4c4] text-center xl:text-2xl lg:text-xl md:text-lg text-sm sm:p-2 p-0.5 whitespace-nowrap'>{format(new Date(object.date), 'hh:mm:ss aa')}</td>
                <td className="text-start pl-[10px] border border[#c5c4c4] xl:text-2xl lg:text-xl md:text-lg text-sm sm:p-2 p-0.5">{object.description}</td>
              </tr>
            }
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}
