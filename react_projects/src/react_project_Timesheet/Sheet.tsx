import { format } from "date-fns"

export const Sheet = (props) => {

  console.log(props.timesheetArray)
  console.log(props.userEvent)
  return (
    <>
      <div className="sheet-container">
     
        <div className="sheet-table-container">
        {/* {!props.button && <div>hello</div>} */}
          <table >
            <tbody>



              {<tr>
                <th>EVENT</th>
                <th>TIME</th>
                <th>DESCRIPTION</th>
              </tr>}
              

              {props.timesheetArray.map((object, i) => {
                return <tr key={i}>
                  <td>{object.eventType}</td>
                  <td>{format(object.date, "h:m:ss aa")}</td>
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
