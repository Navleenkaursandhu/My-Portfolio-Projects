export const Definition = (props) => {

  console.log(props.define)
  return(
    <>
    <div>
      {(props.define || []).map( (object, i) => {
        return <div key={i}>
        
        <li className="definition">{object.definition}</li>
         
         {object.example && <div>{`Example: ${object.example}`}</div>}
        </div>
      }) }
      </div>
    </>
  )
}