export const Definition = (props) => {
  return (
    <>
      <div className="definition-column">
        {(props.define || []).map((object, i) => {
          return <div key={i}>
            <li className="definition">{object.definition}</li>
            {object.example && <div className="example">{`Example: ${object.example as string}`}</div>}
          </div>
        })}
      </div>
    </>
  )
}
