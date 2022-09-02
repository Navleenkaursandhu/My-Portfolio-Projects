export const Antonyms = (props) => {

  console.log(props.opposite)
  return (
    <>
      {props.opposite.length !== 0 &&  <div>Antonyms</div>}
      {(props.opposite || []).map((string, i) =><div key={i}>{string}</div>)}
    </>
  )
}