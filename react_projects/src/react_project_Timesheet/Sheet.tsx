import { format, formatISO } from 'date-fns'

export const Sheet = (props) => {
  const object = props.timesheetArray
  const dateCurrent = formatISO(props.date, { representation: 'date' })
  const arrayToDisplay = object[dateCurrent]
  return (
    <>
      <div className="sheet-container">
        <div className="sheet-table-container">
          <table >
            <tbody>
              {<tr>
                <th>EVENT</th>
                <th>TIME</th>
                <th>DESCRIPTION</th>
              </tr>}

              {arrayToDisplay?.map((object, i) => {
                return <tr key={i}>
                  <td>{object.eventType}</td>
                  <td>{format(new Date(object.date), 'h:m:ss aa')}</td>
                  <td className="task-description">{object.description}</td>
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
