export const Synonyms = (props) => {

  return(
    <>
    {props.similar.length !== 0 &&  <div>Synonyms</div>}
    {(props.similar || []).map((string,i) => <div key={i}>{string}</div>)}
    </>
  )
}