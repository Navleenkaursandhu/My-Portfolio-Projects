import { format } from "date-fns"

export const Sheet = (props) => {

  console.log(props.timesheetArray)
  console.log(props.userEvent)
  return (
    <>
      <div className="sheet-container">
        <div className="sheet-table-container">
          <table >
            <tbody>
              <tr>
                <th>EVENT</th>
                <th>TIME</th>
                <th>DESCRIPTION</th>
              </tr>

              {props.timesheetArray.map((object, i) => {
                return <tr key={i}>
                  <td>{object.eventType}</td>
                  <td>{format(object.date, "h:m aa")}</td>
                  <td>{object.description}</td>
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
