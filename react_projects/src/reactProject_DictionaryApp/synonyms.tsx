export const Synonyms = (props) => {

  return (
    <>
      {props.similar.length !== 0 && <div className="similar-font">Synonyms:</div>}
      <div className="similar">
        {(props.similar || []).map((string, i) => <div key={i}><div className="string-color">{string}</div></div>)}
      </div>
    </>
  )
}