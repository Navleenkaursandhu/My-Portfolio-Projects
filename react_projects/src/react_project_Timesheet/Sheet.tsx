import { format, formatISO } from 'date-fns'

export const Sheet = (props) => {
  const object = props.timesheetArray
  const dateCurrent = formatISO(props.date, { representation: 'date' })
  const arrayToDisplay = object[dateCurrent]
  return (
    <>
      <div className="flex justify-center text-center h-[80%] mt-[46px] mr-10 ml-80">
        <div className="border-2 border-[#c5c4c4] w-full overflow-auto">
          <table className='w-full' >
            <tbody>
              {<tr>
                <th className='border border-[#c5c4c4] text-[28px] p-[10px]'>EVENT</th>
                <th className='border border-[#c5c4c4] text-[28px] p-[10px]'>TIME</th>
                <th className='border border-[#c5c4c4] text-[28px] p-[10px]'>DESCRIPTION</th>
              </tr>}

              {arrayToDisplay?.map((object, i) => {
                return <tr key={i}>
                  <td className='border border[#c5c4c4] text-[23px] text-center'>{object.eventType}</td>
                  <td className='border border[#c5c4c4] text-[23px] text-center'>{format(new Date(object.date), 'hh:mm:ss aa')}</td>
                  <td className="text-start pl-[10px] border border[#c5c4c4] text-[23px]">{object.description}</td>
                </tr>
              }
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
